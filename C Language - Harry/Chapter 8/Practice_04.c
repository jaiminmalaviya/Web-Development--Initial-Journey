#include <stdio.h>

int strcopy(char *pt2, char *pt1)
{
    int i = 0;
    char *str = pt1;

    while (*str != '\0')
    {
        pt2[i] = pt1[i];
        i++;
        str++;
    }
    pt2[i] = '\0';

    // while (*pt1 != 0)
    // {
    //     *pt2 = *pt1;
    //     pt1++;
    //     pt2++;
    // }
    // *pt2 = '\0';
}

int main()
{
    char st1[] = "Jaimin Malaviya";
    char st2[30];

    strcopy(st2, st1);
    printf("Now the st2 is %s", st2);

    return 0;
}