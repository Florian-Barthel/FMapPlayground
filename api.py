from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
import torchvision.transforms as T
import torch
from io import BytesIO

from backward_graph_clean import BackwardGraph
from fmap_viz import create
from test_networks import submodules
from api_graph import APIGraph

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
api_graph: APIGraph = None


@app.route("/api/graph", methods=["GET", "POST"])
def get_graph():
    global graph
    global api_graph
    net = submodules.Net()
    graph = create(net)

    api_graph = APIGraph(graph.module_info)
    api_graph.rec_add_nodes(graph.split_into_modules())
    api_graph.add_connections(graph.connections.forward_connections)

    json_graph = jsonify({"status": "success", "edges": api_graph.edges, "nodes": api_graph.nodes})
    return json_graph


@app.route("/api/fmap", methods=["GET", "POST"])
def get_img():
    node_id = request.args.get("node_id")
    node_id = node_id.split("/")[-1]
    global api_graph
    if api_graph is None:
        return jsonify({f"status": f"create graph first with /api/graph"})

    if node_id not in api_graph.module_info.keys():
        return jsonify({f"status": f"{node_id} not in nodes"})

    if not hasattr(api_graph.module_info[node_id], "input_tensor"):
        return jsonify({f"status": f"no fmap for node: {node_id}"})

    fmap = torch.mean(api_graph.module_info[node_id].input_tensor, dim=0)
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
