
ellipse = 'ellipse'
box = 'box'
diamond = 'diamond'
point = 'point'

red = 'crimson'
blue = 'deepskyblue2'
light_blue = 'aliceblue'
orange = 'coral'
green = 'chartreuse2'

default_node_attr = dict(
    style='filled',
    align='center',
    shape='box',
    fontsize='10',
    ranksep='0.01',
    height='0.2',
    fontname='monospace'
)


shapes = {
    '+': ellipse,
    'Relu': diamond,
    'Input': point,
    'Output': point
}


def get_shape(node_name: str):
    for key, shape in shapes.items():
        if node_name.startswith(key):
            return shape


colors = {
    'Convolution': blue,
    'Relu': light_blue,
    'Linear': green
}


def get_color(node_name: str):
    for key, color in colors.items():
        if node_name.startswith(key):
            return color
