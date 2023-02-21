from typing import Iterable


def list_hash(obj):
    """
    Helper function to hash any object.
    :param obj:
    :return:
    """
    if isinstance(obj, Iterable):
        result = ''
        for element in obj:
            result += str(hash(element))
        return result
    else:
        return str(hash(obj))
