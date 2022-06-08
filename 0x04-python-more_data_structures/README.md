Toggle navigation

0x04. Python - More Data Structures: Set, Dictionary

 By Guillaume Weight: 1 Ongoing project - started 

Jun 8, 2022

, must end by 

Jun 9, 2022

 - you're done with 0% of tasks. Checker was released at 

Jun 8, 2022 12:00 PM

 An auto review will be launched at the deadline

Resources

Read or watch:

Data structuresLambda, filter, reduce and mapLearn to Program 12 Lambda Map Filter Reduce

man or help:

python3Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

GeneralWhy Python programming is awesomeWhat are sets and how to use themWhat are the most common methods of set and how to use themWhen to use sets versus listsHow to iterate into a setWhat are dictionaries and how to use themWhen to use dictionaries versus lists or setsWhat is a key in a dictionaryHow to iterate over a dictionaryWhat is a lambda functionWhat are the map, reduce and filter functionsCopyright - PlagiarismYou are tasked to come up with solutions for the tasks below yourself to meet with the above learning objectives.You will not be able to meet the objectives of this or any following project by copying and pasting someone else’s work.You are not allowed to publish any content of this project.Any form of plagiarism is strictly forbidden and will result in removal from the program.RequirementsGeneralAllowed editors: vi, vim, emacsAll your files will be interpreted/compiled on Ubuntu 20.04 LTS using python3 (version 3.8.5)All your files should end with a new lineThe first line of all your files should be exactly #!/usr/bin/python3A README.md file, at the root of the folder of the project, is mandatoryYour code should use the pycodestyle (version 2.8.*)All your files must be executableThe length of your files will be tested using wc

Quiz questions

Great! You've completed the quiz successfully! Keep going! (Show quiz)

Tasks

0. Squared simple

mandatory

Write a function that computes the square value of all integers of a matrix.

Prototype: def square_matrix_simple(matrix=[]):matrix is a 2 dimensional arrayReturns a new matrix:Same size as matrixEach value should be the square of the value of the inputInitial matrix should not be modifiedYou are not allowed to import any moduleYou are allowed to use regular loops, map, etc.guillaume@ubuntu:~/0x04$ cat 0-main.py #!/usr/bin/python3 square_matrix_simple = __import__('0-square_matrix_simple').square_matrix_simple matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] new_matrix = square_matrix_simple(matrix) print(new_matrix) print(matrix) guillaume@ubuntu:~/0x04$ ./0-main.py [[1, 4, 9], [16, 25, 36], [49, 64, 81]] [[1, 2, 3], [4, 5, 6], [7, 8, 9]] guillaume@ubuntu:~/0x04$ 

Repo:

GitHub repository: alx-higher_level_programmingDirectory: 0x04-python-more_data_structuresFile: 0-square_matrix_simple.py

 Done? Help Check your code Get a sandbox

1. Search and replace

mandatory

Write a function that replaces all occurrences of an element by another in a new list.

Prototype: def search_replace(my_list, search, replace):my_list is the initial listsearch is the element to replace in the listreplace is the new elementYou are not allowed to import any moduleguillaume@ubuntu:~/0x04$ cat 1-main.py #!/usr/bin/python3 search_replace = __import__('1-search_replace').search_replace my_list = [1, 2, 3, 4, 5, 4, 2, 1, 1, 4, 89] new_list = search_replace(my_list, 2, 89) print(new_list) print(my_list) guillaume@ubuntu:~/0x04$ ./1-main.py [1, 89, 3, 4, 5, 4, 89, 1, 1, 4, 89] [1, 2, 3, 4, 5, 4, 2, 1, 1, 4, 89] guillaume@ubuntu:~/0x04$ 

Repo:

GitHub repository: alx-higher_level_programmingDirectory: 0x04-python-more_data_structuresFile: 1-search_replace.py

 Done? Help Check your code Get a sandbox

2. Unique addition

mandatory

Write a function that adds all unique integers in a list (only once for each integer).

Prototype: def uniq_add(my_list=[]):You are not allowed to import any moduleguillaume@ubuntu:~/0x04$ cat 2-main.py #!/usr/bin/python3 uniq_add = __import__('2-uniq_add').uniq_add my_list = [1, 2, 3, 1, 4, 2, 5] result = uniq_add(my_list) print("Result: {:d}".format(result)) guillaume@ubuntu:~/0x04$ ./2-main.py Result: 15 guillaume@ubuntu:~/0x04$ 

Repo:

GitHub repository: alx-higher_level_programmingDirectory: 0x04-python-more_data_structuresFile: 2-uniq_add.py

 Done? Help Check your code Get a sandbox

3. Present in both

mandatory

Write a function that returns a set of common elements in two sets.

Prototype: def common_elements(set_1, set_2):You are not allowed to import any moduleguillaume@ubuntu:~/0x04$ cat 3-main.py #!/usr/bin/python3 common_elements = __import__('3-common_elements').common_elements set_1 = { "Python", "C", "Javascript" } set_2 = { "Bash", "C", "Ruby", "Perl" } c_set = common_elements(set_1, set_2) print(sorted(list(c_set))) guillaume@ubuntu:~/0x04$ ./3-main.py ['C'] guillaume@ubuntu:~/0x04$ 

Repo:

GitHub repository: alx-higher_level_programmingDirectory: 0x04-python-more_data_structuresFile: 3-common_elements.py

 Done? Help Check your code Get a sandbox

4. Only differents

mandatory

Write a function that returns a set of all elements present in only one set.

Prototype: def only_diff_elements(set_1, set_2):You are not allowed to import any moduleguillaume@ubuntu:~/0x04$ cat 4-main.py #!/usr/bin/python3 only_diff_elements = __import__('4-only_diff_elements').only_diff_elements set_1 = { "Python", "C", "Javascript" } set_2 = { "Bash", "C", "Ruby", "Perl" } od_set = only_diff_elements(set_1, set_2) print(sorted(list(od_set))) guillaume@ubuntu:~/0x04$ ./4-main.py ['Bash', 'Javascript', 'Perl', 'Python', 'Ruby'] guillaume@ubuntu:~/0x04$ 

Repo:

GitHub repository: alx-higher_level_programmingDirectory: 0x04-python-more_data_structuresFile: 4-only_diff_elements.py

 Done? Help Check your code Get a sandbox

5. Number of keys

mandatory

Write a function that returns the number of keys in a dictionary.

Prototype: def number_keys(a_dictionary):You are not allowed to import any moduleguillaume@ubuntu:~/0x04$ cat 5-main.py #!/usr/bin/python3 number_keys = __import__('5-number_keys').number_keys a_dictionary = { 'language': "C", 'number': 13, 'track': "Low level" } nb_keys = number_keys(a_dictionary) print("Number of keys: {:d}".format(nb_keys)) guillaume@ubuntu:~/0x04$ ./5-main.py Number of keys: 3 guillaume@ubuntu:~/0x04$ 

Repo:

GitHub repository: alx-higher_level_programmingDirectory: 0x04-python-more_data_structuresFile: 5-number_keys.py

 Done? Help Check your code Get a sandbox

6. Print sorted dictionary

mandatory

Write a function that prints a dictionary by ordered keys.

Prototype: def print_sorted_dictionary(a_dictionary):You can assume that all keys are stringsKeys should be sorted by alphabetic orderOnly sort keys of the first level (don’t sort keys of a dictionary inside the main dictionary)Dictionary values can have any typeYou are not allowed to import any moduleguillaume@ubuntu:~/0x04$ cat 6-main.py #!/usr/bin/python3 print_sorted_dictionary = __import__('6-print_sorted_dictionary').print_sorted_dictionary a_dictionary = { 'language': "C", 'Number': 89, 'track': "Low level", 'ids': [1, 2, 3] } print_sorted_dictionary(a_dictionary) guillaume@ubuntu:~/0x04$ ./6-main.py Number: 89 ids: [1, 2, 3] language: C track: Low level guillaume@ubuntu:~/0x04$ 

Repo:

GitHub repository: alx-higher_level_programmingDirectory: 0x04-python-more_data_structuresFile: 6-print_sorted_dictionary.py

 Done? Help Check your code Get a sandbox

7. Update dictionary

mandatory

Write a function that replaces or adds key/value in a dictionary.

Prototype: def update_dictionary(a_dictionary, key, value):key argument will be always a stringvalue argument will be any typeIf a key exists in the dictionary, the value will be replacedIf a key doesn’t exist in the dictionary, it will be createdYou are not allowed to import any moduleguillaume@ubuntu:~/0x04$ cat 7-main.py #!/usr/bin/python3 update_dictionary = __import__('7-update_dictionary').update_dictionary print_sorted_dictionary = __import__('6-print_sorted_dictionary').print_sorted_dictionary a_dictionary = { 'language': "C", 'number': 89, 'track': "Low level" } new_dict = update_dictionary(a_dictionary, 'language', "Python") print_sorted_dictionary(new_dict) print("--") print_sorted_dictionary(a_dictionary) print("--") print("--") new_dict = update_dictionary(a_dictionary, 'city', "San Francisco") print_sorted_dictionary(new_dict) print("--") print_sorted_dictionary(a_dictionary) guillaume@ubuntu:~/0x04$ ./7-main.py language: Python number: 89 track: Low level -- language: Python number: 89 track: Low level -- -- city: San Francisco language: Python number: 89 track: Low level -- city: San Francisco language: Python number: 89 track: Low level guillaume@ubuntu:~/0x04$ 

Repo:

GitHub repository: alx-higher_level_programmingDirectory: 0x04-python-more_data_structuresFile: 7-update_dictionary.py

 Done? Help Check your code Get a sandbox

8. Simple delete by key

mandatory

Write a function that deletes a key in a dictionary.

Prototype: def simple_delete(a_dictionary, key=""):key argument will be always a stringIf a key doesn’t exist, the dictionary won’t changeYou are not allowed to import any moduleguillaume@ubuntu:~/0x04$ cat 8-main.py #!/usr/bin/python3 simple_delete = __import__('8-simple_delete').simple_delete print_sorted_dictionary = \ __import__('6-print_sorted_dictionary').print_sorted_dictionary a_dictionary = { 'language': "C", 'Number': 89, 'track': "Low", 'ids': [1, 2, 3] } new_dict = simple_delete(a_dictionary, 'track') print_sorted_dictionary(a_dictionary) print("--") print_sorted_dictionary(new_dict) print("--") print("--") new_dict = simple_delete(a_dictionary, 'c_is_fun') print_sorted_dictionary(a_dictionary) print("--") print_sorted_dictionary(new_dict) guillaume@ubuntu:~/0x04$ ./8-main.py Number: 89 ids: [1, 2, 3] language: C -- Number: 89 ids: [1, 2, 3] language: C -- -- Number: 89 ids: [1, 2, 3] language: C -- Number: 89 ids: [1, 2, 3] language: C guillaume@ubuntu:~/0x04$ 

Repo:

GitHub repository: alx-higher_level_programmingDirectory: 0x04-python-more_data_structuresFile: 8-simple_delete.py

 Done? Help Check your code Get a sandbox

9. Multiply by 2

mandatory

Write a function that returns a new dictionary with all values multiplied by 2

Prototype: def multiply_by_2(a_dictionary):You can assume that all values are only integersReturns a new dictionaryYou are not allowed to import any moduleguillaume@ubuntu:~/0x04$ cat 9-main.py #!/usr/bin/python3 multiply_by_2 = __import__('9-multiply_by_2').multiply_by_2 print_sorted_dictionary = \ __import__('6-print_sorted_dictionary').print_sorted_dictionary a_dictionary = {'John': 12, 'Alex': 8, 'Bob': 14, 'Mike': 14, 'Molly': 16} new_dict = multiply_by_2(a_dictionary) print_sorted_dictionary(a_dictionary) print("--") print_sorted_dictionary(new_dict) guillaume@ubuntu:~/0x04$ ./9-main.py Alex: 8 Bob: 14 John: 12 Mike: 14 Molly: 16 -- Alex: 16 Bob: 28 John: 24 Mike: 28 Molly: 32 guillaume@ubuntu:~/0x04$ 

Repo:

GitHub repository: alx-higher_level_programmingDirectory: 0x04-python-more_data_structuresFile: 9-multiply_by_2.py

 Done? Help Check your code Get a sandbox

10. Best score

mandatory

Write a function that returns a key with the biggest integer value.

Prototype: def best_score(a_dictionary):You can assume that all values are only integersIf no score found, return NoneYou can assume all students have a different scoreYou are not allowed to import any moduleguillaume@ubuntu:~/0x04$ cat 10-main.py #!/usr/bin/python3 best_score = __import__('10-best_score').best_score a_dictionary = {'John': 12, 'Bob': 14, 'Mike': 14, 'Molly': 16, 'Adam': 10} best_key = best_score(a_dictionary) print("Best score: {}".format(best_key)) best_key = best_score(None) print("Best score: {}".format(best_key)) guillaume@ubuntu:~/0x04$ ./10-main.py Best score: Molly Best score: None guillaume@ubuntu:~/0x04$ 

Repo:

GitHub repository: alx-higher_level_programmingDirectory: 0x04-python-more_data_structuresFile: 10-best_score.py

 Done? Help Check your code Get a sandbox

11. Multiply by using map

mandatory

Write a function that returns a list with all values multiplied by a number without using any loops.

Prototype: def multiply_list_map(my_list=[], number=0):Returns a new list:Same length as my_listEach value should be multiplied by numberInitial list should not be modifiedYou are not allowed to import any moduleYou have to use mapYour file should be max 3 linesguillaume@ubuntu:~/0x04$ cat 11-main.py #!/usr/bin/python3 multiply_list_map = __import__('11-multiply_list_map').multiply_list_map my_list = [

