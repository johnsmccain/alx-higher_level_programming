#!/usr/bin/python3

def new_in_list(my_list, idx, element):
    """
    replace element at index idx without
    modifying the orginal list
    """
    if idx >= len(my_list) or idx < 0:
        return (my_list)
    newList = my_list.copy()
    newList[idx] = element
    return (newList)
