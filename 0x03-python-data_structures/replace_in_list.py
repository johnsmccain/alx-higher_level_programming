#!/usr/bin/python3


def replace_in_list(my_list, idx, element):
    """
    Replaces idx with element
    """
    if len(my_list) <= idx and idx < 0:
        return

    my_list[idx] = element
    return (my_list)
