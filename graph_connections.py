from typing import Set, Iterable


class GraphConnections:
    def __init__(self):
        # origin_node -> set(target_nodes)
        self.forward_connections: dict[object, Set[object]] = {}
        # target_node -> set(origin_nodes)
        self.backward_connections: dict[object, Set[object]] = {}

    def add_connection(self, origin, target) -> None:
        self.add_connections_multiple_targets(origin, [target])

    def add_connections_multiple_targets(self, origin, targets: Iterable) -> None:
        if origin not in self.forward_connections.keys():
            self.forward_connections[origin] = set()

        for target in targets:
            self.forward_connections[origin].add(target)
            if target not in self.backward_connections.keys():
                self.backward_connections[target] = set()
            self.backward_connections[target].add(origin)

    def add_connections_multiple_origins(self, origins: Iterable, target) -> None:
        if target not in self.backward_connections.keys():
            self.backward_connections[target] = set()

        for origin in origins:
            self.backward_connections[target].add(origin)
            if origin not in self.forward_connections.keys():
                self.forward_connections[origin] = set()
            self.forward_connections[origin].add(target)

    def remove_connection(self, origin, target) -> None:
        """
        Removes an edge described by origin node and target node.
        :param origin: origin node of edge to delete
        :param target: target node of edge to delete
        """
        saved_backward_nodes = self.get_previous_nodes(target)
        for next_node in self.get_next_nodes(origin):
            if next_node == target:
                self.forward_connections[origin].remove(target)
                self.backward_connections[target].remove(origin)

        self.remove_empty_connections()

    def remove_node(self, delete_node, fix_graph) -> None:
        """
        Removes all connections that contain the node_id.
        :param delete_node: node to delete
        :param fix_graph: if true, the all connections before and after the node will be connected.
        """
        # save all connections
        saved_forward_connections = self.get_next_nodes(delete_node)
        saved_backward_connections = self.get_previous_nodes(delete_node)

        if delete_node in self.forward_connections.keys():
            del self.forward_connections[delete_node]
        # remove all connections where the target node is the node to delete
        for node_id in self.forward_connections.keys():
            next_nodes = self.forward_connections[node_id]
            if delete_node in next_nodes:
                next_nodes.remove(delete_node)

        if delete_node in self.backward_connections.keys():
            del self.backward_connections[delete_node]
        # remove all connections where the origin node is the node to delete
        for node_id in self.backward_connections.keys():
            prev_nodes = self.backward_connections[node_id]
            if delete_node in prev_nodes:
                prev_nodes.remove(delete_node)

        if fix_graph:
            for backward_connection in saved_backward_connections:
                self.add_connections_multiple_targets(backward_connection, saved_forward_connections)

        self.remove_empty_connections()

    def get_next_nodes(self, node):
        result = self.forward_connections.get(node)
        if result is not None:
            return result.copy()
        return set()

    def get_previous_nodes(self, node):
        result = self.backward_connections.get(node)
        if result is not None:
            return result.copy()
        return set()

    def insert_node_inbetween(self, node_before, node_to_insert, node_after):
        self.add_connection(node_before, node_to_insert)
        self.add_connection(node_to_insert, node_after)
        self.remove_connection(node_before, node_after)

    def remove_empty_connections(self):
        forward_connections_to_delete = set()
        for forward_connection in self.forward_connections.keys():
            if len(self.forward_connections[forward_connection]) == 0:
                forward_connections_to_delete.add(forward_connection)

        for delete_connection in forward_connections_to_delete:
            del self.forward_connections[delete_connection]

        backward_connections_to_delete = set()
        for backward_connection in self.backward_connections.keys():
            if len(self.backward_connections[backward_connection]) == 0:
                backward_connections_to_delete.add(backward_connection)

        for delete_connection in backward_connections_to_delete:
            del self.backward_connections[delete_connection]

    def get_all_nodes(self):
        self.remove_empty_connections()
        return list(self.forward_connections.keys())

    def iterate_connections(self):
        return self.forward_connections.items()
