from custom_layer import BackwardLayer, ResultLayer

translate_dict = {"Addmm": "Linear"}

search_attributes = [
    "variable",
    "_saved_self",
    # reshape
    "_saved_self_sym_sizes",
    "_saved_result",
    "_saved_input_sym_sizes",
    "_saved_scale_factors",
    "_saved_dim",
    "_saved_",
    # conv
    "_saved_bias_sym_sizes_opt",
    "_saved_dilation",
    "_saved_groups",
    "_saved_input",
    "_saved_output_padding",
    "_saved_padding",
    "_saved_stride",
    "_saved_transposed",
    "_saved_weight",
    # batch_norm
    "_raw_saved_input",
    "_raw_saved_result1",
    "_raw_saved_result2",
    "_raw_saved_running_mean",
    "_raw_saved_running_var",
    "_raw_saved_weight",
    "_saved_eps",
    "_saved_input",
    "_saved_result1",
    "_saved_result2",
    "_saved_running_mean",
    "_saved_running_var",
    "_saved_training",
    "_saved_weight",
]


def gather_layer_info(grad_fn_layer):
    info = {"name": str(type(grad_fn_layer).__name__), "memory_id": grad_fn_layer}
    # if "add" in info["name"].lower():
    #     print()
    for attr in search_attributes:
        if hasattr(grad_fn_layer, attr):
            result = getattr(grad_fn_layer, attr)
            if result is not None:
                info[attr] = result

    return info


def get_function_description(layer, param_map):
    name = ""
    if isinstance(layer, BackwardLayer):
        name = layer.name
        if "Backward0" in name:
            name = name[: name.index("Backward0")]
        if translate_dict.get(name) is not None:
            name = translate_dict.get(name)
    elif isinstance(layer, ResultLayer):
        name = layer.layer_type.value

    info = append_info(layer, param_map)
    description = name + info
    return description


def append_info(layer: [BackwardLayer, ResultLayer], param_map) -> str:
    result_string = ""

    if isinstance(layer, BackwardLayer):
        for node in layer.weight_nodes:
            if "variable" in node.layer_backwards_info.keys():
                var = node.layer_backwards_info["variable"]
                var_name = param_map.get(str(id(var))).split(".")[-1]
                if var_name is not None:
                    result_string += "\n"
                    result_string += var_name
                    result_string += str(var.data.numpy().shape)
            else:
                result_string += "\n"
                result_string += "Constant Input"

    # result_string += '\n'
    # result_string += layer.scope

    return result_string
