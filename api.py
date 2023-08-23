from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
import torchvision.transforms as T
import torch
from io import StringIO

from fmap_viz import create
from test_network import TestNet


def serve_pil_image(pil_img):
    img_io = StringIO()
    pil_img.save(img_io, "JPEG", quality=70)
    img_io.seek(0)
    return send_file(img_io, mimetype="image/jpeg")


app = Flask(__name__)
CORS(app)
graph = None


@app.route("/api/graph", methods=["GET", "POST"])
def get_graph():
    global graph
    net = TestNet()
    graph = create(net)
    forward_connections = graph.connections.forward_connections
    all_connections = []
    for start, end in forward_connections.items():
        for end_id in end:
            all_connections.append((str(start), str(end_id)))

    all_layers = graph.all_layers
    all_layers = [str(key) for key in all_layers.keys()]
    json_graph = jsonify(
        {"status": "success", "edges": all_connections, "nodes": all_layers}
    )
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
