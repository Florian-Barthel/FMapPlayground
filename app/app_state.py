from typing import List

from app.graph.basic_node import BasicNode, ImageNode
from app.graph.connection import Connection


class AppState:
    def __init__(self):
        self.nodes: List[BasicNode, ImageNode] = []
        self.connections: List[Connection] = []

    def add_node(self, node):
        self.nodes.append(node)

    def add_connection(self, connection):
        self.connections.append(connection)

    def draw_all(self):
        for node in self.nodes:
            node.draw()
        for connection in self.connections:
            connection.draw()
