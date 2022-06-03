#!/usr/bin/python3

def print_matrix_integer(matrix=[[]]):
    """
    print an matrix of  integer
    """
    for row in matrix:
        rowLen = len(row)
        for i in range(rowLen):
            if i != rowLen - 1:
                print("{:d}".format(row[i]), end=' ')
            else:
                print("{:d}".format(row[i]), end='')
        print()
