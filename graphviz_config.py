
# shapes
ellipse = 'ellipse'
box = 'box'
diamond = 'diamond'
point = 'point'
triangle = 'triangle'
invtriangle = 'invtriangle'

shapes = {
    'Add': ellipse,
    'Relu': diamond,
    'Sigmoid': diamond,
    # 'In': point,
    # 'Out': point
    'In': invtriangle,
    'Out': triangle,
    'Intermediate': box,
}


def get_shape(node_name: str):
    for key, shape in shapes.items():
        if node_name == key:
            return shape


# colors
red = 'crimson'
blue = 'deepskyblue2'
light_blue = 'aliceblue'
orange = 'coral'
green = 'chartreuse2'

colors = {
    'Convolution': blue,
    'Relu': light_blue,
    'Sigmoid': light_blue,
    'Linear': green
}


def get_color(node_name: str):
    for key, color in colors.items():
        if node_name.lower().startswith(key.lower()):
            return color


default_node_attr = dict(
    style='filled',
    align='center',
    shape='box',
    fontsize='10',
    ranksep='0.01',
    height='0.2',
    fontname='monospace'
)

