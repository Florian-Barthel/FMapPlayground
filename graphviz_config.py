
circle = 'circle'
box = 'box'
diamond = 'diamond'

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
    ranksep='0.1',
    height='0.2',
    fontname='monospace'
)


shapes = {
    '+': circle,
    'Relu': diamond
}

colors = {
    'Convolution': blue,
    'Relu': light_blue,
    'Linear': blue
}