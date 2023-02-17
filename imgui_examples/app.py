import time
import numpy as np

from imgui_bundle import implot, imgui, immapp, hello_imgui, ImVec2
from imgui_bundle import imgui_node_editor as ed

# Fill x and y whose plot is a heart
vals = np.arange(0, np.pi * 2, 0.01)
x = np.power(np.sin(vals), 3) * 16
y = 13 * np.cos(vals) - 5 * np.cos(2 * vals) - 2 * np.cos(3 * vals) - np.cos(4 * vals)
# Heart pulse rate and time tracking
phase = 0
t0 = time.time() + 0.2
heart_pulse_rate = 80


def gui():
    global heart_pulse_rate, phase, t0, x, y
    # Make sure that the animation is smooth
    hello_imgui.get_runner_params().fps_idling.enable_idling = False

    t = time.time()
    phase += (t - t0) * heart_pulse_rate / (np.pi * 2)
    k = 0.8 + 0.1 * np.cos(phase)
    t0 = t


    context = ed.create_editor()
    ed.set_current_editor(context)
    ed.begin('my editor')

    nodeid = ed.NodeId()
    ed.begin_node(nodeid)
    ed.set_node_position(nodeid, ImVec2(300, 300))
    imgui.text("Bloat free code")
    implot.begin_plot("Heart", immapp.em_to_vec2(21, 21))
    implot.plot_line("", x * k, y * k)
    implot.end_plot()
    ed.end_node()

    ed.end()


if __name__ == "__main__":
    immapp.run(gui, window_size=(1000, 1000), with_node_editor=True, window_title="Hello!", with_implot=True, fps_idle=0)  # type: ignore
