

def gather_layer_info(grad_fn_layer):
    search_attributes = [
        'variable',
        '_saved_self',
        '_saved_weight',
        '_saved_self_sym_sizes',
        '_saved_result',
        '_saved_input_sym_sizes',
        '_saved_scale_factors'
    ]
    info = {
        'name': str(type(grad_fn_layer).__name__),
        'memory_id': str(id(grad_fn_layer))
    }
    for attr in search_attributes:
        if hasattr(grad_fn_layer, attr):
            result = getattr(grad_fn_layer, attr)
            info[attr] = result

    return info


def get_function_name(backwards_name: str):
    if backwards_name.endswith('Backward0'):
        backwards_name = backwards_name[:-len('Backward0')]
    if backwards_name == 'Add':
        backwards_name = '+'
    if backwards_name == 'Addmm':
        backwards_name = 'Linear'
    return backwards_name
