from typing import List, Tuple

from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
import torchvision.transforms as T
import torch
from io import BytesIO

from backward_graph_clean import BackwardGraph
from fmap_viz import create
from test_networks import submodules

from torchvision.models import (
    efficientnet_b4,
    mobilenet_v2,
    vgg16,
    inception_v3,
    googlenet,
    squeezenet,
)


def serve_pil_image(pil_img):
    img_io = BytesIO()
    pil_img.save(img_io, "JPEG", quality=70)
    img_io.seek(0)
    return send_file(img_io, mimetype="image/jpeg")


app = Flask(__name__)
CORS(app)
graph: BackwardGraph = None


class APIGraph:
    def __init__(self):
        self.nodes: List[dict] = []
        self.edges = []

    def rec_add_nodes(self, module: dict):
        children = []
        id_ = list(module.keys())[0]

        name = id_
        if "?!module_id" in name:
            name = name[: name.index("?!module_id")]

        content = list(module.values())[0]
        if "layers" in content.keys():
            for layer in content["layers"]:
                children.append(str(layer.grad_fn))
                self.nodes.append(dict(id=str(layer.grad_fn), name=str(layer.grad_fn), children=[]))

        if "next_scopes" in content.keys():
            for next_module_name, next_module_content in content["next_scopes"].items():
                children.append(next_module_name)
                self.rec_add_nodes({next_module_name: next_module_content})

        self.nodes.append(dict(id=id_, name=name, children=children))

    def add_connections(self, forward_connections: dict):
        for start, end in forward_connections.items():
            for end_id in end:
                start_node = str(start)
                end_node = str(end_id)
                self.edges.append((start_node, "out", end_node, "in"))


@app.route("/api/graph", methods=["GET", "POST"])
def get_graph():
    global graph
    net = submodules.Net()
    graph = create(net)

    api_graph = APIGraph()
    api_graph.rec_add_nodes(graph.split_into_modules())
    api_graph.add_connections(graph.connections.forward_connections)

    json_graph = jsonify({"status": "success", "edges": api_graph.edges, "nodes": api_graph.nodes})
    return json_graph


@app.route("/api/fmap", methods=["GET", "POST"])
def get_img():
    node_id = request.args.get("node_id")
    global graph
    if graph is None:
        return jsonify({f"status": f"create graph first with /api/graph"})

    all_layers = {str(key): value for key, value in graph.all_layers.items()}

    if node_id not in all_layers.keys():
        return jsonify({f"status": f"{node_id} not in nodes"})

    if not hasattr(all_layers[node_id], "data"):
        return jsonify({f"status": f"no fmap for node: {node_id}"})

    fmap = torch.mean(all_layers[node_id].data, dim=0)
    # grad = torch.mean(all_layers[node_id].data.grad, dim=0)
    transform = T.ToPILImage()
    fmap = transform(fmap)
    # grad = transform(grad)

    return serve_pil_image(fmap)


@app.after_request
def after_request(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization")
    response.headers.add("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    return response


if __name__ == "__main__":
    app.run(debug=True)
    # app.run(host='0.0.0.0', debug=False)
