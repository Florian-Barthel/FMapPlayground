from custom_layer import BackwardLayer, ResultLayer

translate_dict = {
    'Add': '+',
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


def get_function_description(backward_layer, param_map):
    name = backward_layer.name
    if name.endswith('Backward0'):
        name = name[:-len('Backward0')]
    if translate_dict.get(name) is not None:
        name = translate_dict.get(name)

    info = append_info(backward_layer, param_map)
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

        if len(layer.possible_scopes) == 0:
            print(f'warning: no scope was found for {layer.name}')
    # result_string += '\n'
    # result_string += layer.scope

    return result_string
