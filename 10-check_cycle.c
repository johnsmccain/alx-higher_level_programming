#include "lists.h"

/**
 * check_cycle - checks linked list if it is a circluar or not
 * @list: linked list to check
 * Return: 1 (linked list is circular) else 0
 */
int check_cycle(listint_t *list)
{
	listint_t *s1 = Null, *s2 = Null;

	s1 = s2 = list;
	while (list && s1 && s2 && s1->next && s2->next)
	{
		s1 = s1->next;
		s2 = s2->next->next;
		if (!s2 || !s1)
			return (0);
		if (s2->next == s1)
			return (1);
	}
	return (0);
}
