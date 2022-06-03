#!/usr/bin/python3

def no_c(my_string):
    """
    exclude 'c' and 'C' from the returned value
    """

    newStr = ""
    for i in my_string:
        if i not in "cC":
            newStr += i
    return (newStr)
