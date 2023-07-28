from custom_layer import BackwardLayer, ResultLayer

translate_dict = {
    'Addmm': 'Linear'
}

search_attributes = [
    'variable',
    '_saved_self',
    '_saved_weight',
    '_saved_self_sym_sizes',
    '_saved_result',
    '_saved_input_sym_sizes',
    '_saved_scale_factors'
]


def gather_layer_info(grad_fn_layer):
    info = {
        'name': str(type(grad_fn_layer).__name__),
        'memory_id': grad_fn_layer
    }
    for attr in search_attributes:
        if hasattr(grad_fn_layer, attr):
            result = getattr(grad_fn_layer, attr)
            if result is not None:
                info[attr] = result

    return info


def get_function_description(layer, param_map):
    name = ''
    if isinstance(layer, BackwardLayer):
        name = layer.name
        if 'Backward0' in name:
            name = name[:name.index('Backward0')]
        if translate_dict.get(name) is not None:
            name = translate_dict.get(name)
    elif isinstance(layer, ResultLayer):
        name = layer.layer_type.value

    info = append_info(layer, param_map)
    description = name + info
    return description


def append_info(layer: [BackwardLayer, ResultLayer], param_map) -> str:
    result_string = ''

    if isinstance(layer, BackwardLayer):
        for node in layer.weight_nodes:
            if 'variable' in node.layer_backwards_info.keys():
                var = node.layer_backwards_info['variable']
                var_name = param_map.get(str(id(var))).split('.')[-1]
                if var_name is not None:
                    result_string += '\n'
                    result_string += var_name
                    result_string += str(var.data.numpy().shape)

    # result_string += '\n'
    # result_string += layer.scope

    return result_string
