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
    Inception_V3_Weights,
    googlenet,
    squeezenet,
)

def serve_pil_image(pil_img):
    img_io = BytesIO()
    pil_img.save(img_io, "PNG", quality=100)
    img_io.seek(0)
    return send_file(img_io, mimetype="image/png")


app = Flask(__name__)
CORS(app)
graph: BackwardGraph = None
api_graph: APIGraph = None
net = None


@app.route("/api/graph", methods=["GET", "POST"])
def get_graph():
    global graph
    global api_graph
    global net
    net = submodules.Net()
    graph = create(net)

    api_graph = APIGraph(graph.module_info)
    api_graph.rec_add_nodes(graph.split_into_modules())
    api_graph.add_connections(graph.connections.forward_connections)

    json_graph = jsonify(
        {
            "status": "success",
            "edges": api_graph.edges,
            "nodes": api_graph.nodes,
            "network_name": api_graph.network_name,
        }
    )
    return json_graph


@app.route("/api/fmap_in", methods=["GET", "POST"])
def get_output_fmap():
    node_id = request.args.get("node_id")
    node_id = node_id.split("/")[-1]
    global api_graph
    if api_graph is None:
        return jsonify({f"status": f"create graph first with /api/graph"})

    if node_id not in api_graph.module_info.keys():
        return jsonify({f"status": f"{node_id} not in nodes"}), 500

    if not hasattr(api_graph.module_info[node_id], "input_tensor"):
        return jsonify({f"status": f"no fmap for node: {node_id}"})

    print(api_graph.module_info[node_id].input_tensor.shape)
    # todo handle flatten vectors and add a slider for multichannel
    fmap = torch.mean(api_graph.module_info[node_id].input_tensor[0], dim=0)
    transform = T.ToPILImage()
    fmap = transform(fmap)
    return serve_pil_image(fmap)


@app.route("/api/fmap_out", methods=["GET", "POST"])
def get_input_fmap():
    node_id = request.args.get("node_id")
    node_id = node_id.split("/")[-1]
    global api_graph
    if api_graph is None:
        return jsonify({f"status": f"create graph first with /api/graph"})

    if node_id not in api_graph.module_info.keys():
        return jsonify({f"status": f"{node_id} not in nodes"})

    if not hasattr(api_graph.module_info[node_id], "input_tensor"):
        return jsonify({f"status": f"no fmap for node: {node_id}"})

    print(api_graph.module_info[node_id].input_tensor.shape)
    fmap = torch.mean(api_graph.module_info[node_id].output_tensor[0], dim=0)
    transform = T.ToPILImage()
    fmap = transform(fmap)
    return serve_pil_image(fmap)


@app.after_request
def after_request(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization")
    response.headers.add("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    return response


def start_api(network):
    global net
    net = network
    app.run(debug=False)

if __name__ == "__main__":
    app.run(debug=False)
