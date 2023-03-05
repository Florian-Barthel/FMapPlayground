from flask import Flask
from flask import request, jsonify
import json
import os
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/get_graph', methods=['POST', 'GET'])
def get_graph():
    graph_id = json.loads(request.form['graph_id'])


    return jsonify({
        'graph': 'graph_dict',
        'status': 'success'
    })


if __name__ == '__main__':
    app.run(debug=True)
