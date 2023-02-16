from imgui_bundle import immapp, imgui, ImVec4, immvision
from imgui_bundle import imgui_node_editor as ed
import os.path

from imgui_bundle._imgui_bundle import hello_imgui

from app_state import AppState

from app.graph.basic_node import BasicNode, ImageNode
from app.graph.connection import Connection

app_state: AppState = AppState()



# define nodes
node1 = BasicNode('node1')
node1.add_out_pin('pin_out')
node2 = ImageNode('node2', '../images/elefant.jpg')
node2.add_in_pin('pin_in')

# define connections
connection = Connection(node_from=node1, from_node_pin_id='pin_out', node_to=node2, to_node_pin_id='pin_in')

app_state.add_node(node1)
app_state.add_node(node2)
app_state.add_connection(connection)


def demo_gui():
    hello_imgui.get_runner_params().fps_idling.enable_idling = False

    this_dir = os.path.dirname(__file__)
    ed.get_config().settings_file = this_dir + "/graph_config.json"

    ed.begin("My Editor", imgui.ImVec2(0.0, 0.0))
    app_state.draw_all()
    ed.end()


if __name__ == "__main__":
    immapp.run(demo_gui, with_node_editor=True, window_size=(1000, 800), window_title="BasicNodes")
