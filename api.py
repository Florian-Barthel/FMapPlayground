from flask import Flask, jsonify
from flask_cors import CORS

from fmap_viz import create

from torchvision.models import efficientnet_b4, mobilenet_v2, vgg16, inception_v3
from test_network import TestNet

app = Flask(__name__)
CORS(app)
net = TestNet()
graph = create(net)


@app.route("/graph", methods=["GET", "POST"])
def index():
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


@app.after_request
def after_request(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization")
    response.headers.add("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    return response


if __name__ == "__main__":
    app.run(debug=True)
    # app.run(host='0.0.0.0', debug=False)
