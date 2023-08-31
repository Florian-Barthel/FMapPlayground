from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
import torchvision.transforms as T
import torch
from io import BytesIO

from backward_graph_clean import BackwardGraph
from custom_layer import ResultLayer
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


class Module:
    def __init__(self, scope):
        self.scope = scope


@app.route("/api/graph", methods=["GET", "POST"])
def get_graph():
    global graph
    net = submodules.Net()
    graph = create(net)
    forward_connections = graph.connections.forward_connections
    edges = []
    all_modules = set()
    for start, end in forward_connections.items():
        for end_id in end:
            start_node = str(start)
            end_node = str(end)
            start_module = graph.all_layers[start].scope
            end_module = graph.all_layers[end_id].scope
            all_modules.add(start_module)
            all_modules.add(end_module)
            edges.append((start_module, start_node, end_module, end_node))

    all_layers = graph.all_layers
    nodes = []
    filtered_layers = {}
    for key in all_layers.keys():
        children = []
        layer = all_layers[key]
        if isinstance(layer, ResultLayer):
            continue
        filtered_layers[key] = layer
        name = all_layers[key].name
        nodes.append(dict(id=str(key), name=name, children=children))

    filtered_layers.update({module: Module(module) for module in all_modules})
    for module in all_modules:
        children = [
            str(layer_key)
            for layer_key in list(filtered_layers.keys())
            if filtered_layers[layer_key].scope.startswith(module)
            and (
                len(filtered_layers[layer_key].scope.split("/")) == len(module.split("/")) + 1
                or len(filtered_layers[layer_key].scope.split("/")) == len(module.split("/"))
                and module.endswith("_leaf")
            )
        ]
        nodes.append(dict(id=module, name=module, children=children))
    json_graph = jsonify({"status": "success", "edges": edges, "nodes": nodes})
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
