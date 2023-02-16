import os.path
import cv2
from imgui_bundle import immvision, immapp, imgui, imgui_md
from imgui_bundle.demos_python import demo_utils


image = cv2.imread('../elefant.jpg')

params_rgb = immvision.ImageParams()
params_rgb.image_display_size = (600, 0)
params_rgb.zoom_key = "some_common_zoom_key"


def demo_gui():
    # imgui_md.render_unindented(
    #     "If two images params share the same ZoomKey, then the images will pan in sync. Pan and zoom the image with the mouse and the mouse wheel"
    # )

    immvision.image("Original Image", image, params_rgb)


if __name__ == "__main__":
    immapp.run(demo_gui, window_size=(1920, 1080), with_markdown=True)
