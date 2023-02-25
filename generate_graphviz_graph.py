import uuid

from graph_connections import GraphConnections
from graphviz import Digraph

import graphviz_config
from custom_layer import ResultLayer, BackwardLayer
from layer_utils import get_function_description


def create_graph_png(connections: GraphConnections, modules: dict, param_map: dict, out_folder: str = 'graph_viz_out'):
    # must be one of ['bmp', 'canon', 'cgimage', 'cmap', 'cmapx', 'cmapx_np', 'dot', 'dot_json', 'eps', 'exr', 'fig', 'gd', 'gd2', 'gif', 'gtk', 'gv', 'ico', 'imap', 'imap_np', 'ismap', 'jp2', 'jpe', 'jpeg', 'jpg', 'json', 'json0', 'pct', 'pdf', 'pic', 'pict', 'plain', 'plain-ext', 'png', 'pov', 'ps', 'ps2', 'psd', 'sgi', 'svg', 'svgz', 'tga', 'tif', 'tiff', 'tk', 'vml', 'vmlz', 'vrml', 'wbmp', 'webp', 'x11', 'xdot', 'xdot1.2', 'xdot1.4', 'xdot_json', 'xlib'])

    graph = Digraph(node_attr=graphviz_config.default_node_attr, format='cmap')
    graph.graph_attr.update({'rankdir': 'LR'})# , 'splines': 'spline'})
    _add_modules_to_graph_rec(graph, modules, param_map, 1)

    for from_id in connections.get_all_nodes():
        to_ids = connections.get_next_nodes(from_id)
        if to_ids is not None:
            for to_id in to_ids:
                graph.edge(str(from_id), str(to_id))
    graph.render(directory=out_folder, view=True)


def _add_modules_to_graph_rec(graph: Digraph, modules: dict, param_map, color_counter: int):
    for scope_name in modules.keys():
        module = modules[scope_name]
        with graph.subgraph(name='cluster' + str(uuid.uuid4().hex)) as sg:
            sg.attr(margin=str(max(50 - color_counter * 5, 10)))
            sg.attr(color='lightgray')
            sg.attr(colorscheme='oranges9') # ylgn9
            sg.attr(bgcolor=str(color_counter))
            sg.attr(style=str('rounded'))
            if '?!module_id:' in scope_name:
                scope_name = scope_name.split('?!module_id:')[0]
            sg.attr(label=scope_name)
            if len(module['next_scopes'].keys()) > 0:
                _add_modules_to_graph_rec(sg, module['next_scopes'], param_map, color_counter + 1)

            for node in module['layers']:
                node_name = get_function_description(node, param_map)
                shape = graphviz_config.get_shape(node_name)
                color = graphviz_config.get_color(node_name)
                if isinstance(node, BackwardLayer):
                    sg.node(str(node.grad_fn), node_name, id=str(uuid.uuid4().hex), shape=shape, fillcolor=color)

                elif isinstance(node, ResultLayer):
                    sg.node(str(node.node_id), node_name, id=str(uuid.uuid4().hex), shape=shape, fillcolor=color)