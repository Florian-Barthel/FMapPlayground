from typing import List, Callable

import cv2
from imgui_bundle import imgui_node_editor as ed, immapp
from imgui_bundle import imgui
from imgui_bundle._imgui_bundle import immvision


class BasicNode:
    def __init__(self, name: str):
        self.name = name
        self.node_id = ed.NodeId.create()
        self.in_pins = {}
        self.out_pins = {}
        self.draw_methods: List[Callable] = [self._draw_pins]

    def add_in_pin(self, pin_name):
        new_pin_id = ed.PinId.create()
        self.in_pins[pin_name] = new_pin_id

    def add_out_pin(self, pin_name):
        new_pin_id = ed.PinId.create()
        self.out_pins[pin_name] = new_pin_id

    def _draw_pins(self):
        for pin_name in self.in_pins.keys():
            ed.begin_pin(self.in_pins[pin_name], ed.PinKind.input)
            imgui.text(pin_name)
            ed.end_pin()
        for pin_name in self.out_pins.keys():
            ed.begin_pin(self.out_pins[pin_name], ed.PinKind.output)
            imgui.text(pin_name)
            ed.end_pin()

    def draw(self):
        ed.begin_node(self.node_id)
        imgui.text_wrapped(self.name)
        for method in self.draw_methods:
            method()
        ed.end_node()


params_rgb = immvision.ImageParams()
params_rgb.image_display_size = (500, 0)


class ImageNode(BasicNode):
    def __init__(self, name: str, image_file: str):
        super().__init__(name)

        self.image = cv2.imread(image_file)
        self.draw_methods.append(self._draw_image)

    def _draw_image(self):

        immvision.image("Original Image", self.image, params_rgb)
