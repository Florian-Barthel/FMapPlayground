from imgui_bundle import imgui_node_editor as ed, ImVec4


class Connection:
    def __init__(self, node_from, from_node_pin_id: str, node_to, to_node_pin_id: str):
        self.id = ed.LinkId.create()
        self.node_from = node_from
        self.node_to = node_to
        self.from_node_pin_id = from_node_pin_id
        self.to_node_pin_id = to_node_pin_id

    def draw(self):
        green = ImVec4(0.3, 0.9, 0.0, 1.0)
        ed.link(
            id=self.id,
            start_pin_id=self.node_from.out_pins[self.from_node_pin_id],
            end_pin_id=self.node_to.in_pins[self.to_node_pin_id],
            color=green
        )
