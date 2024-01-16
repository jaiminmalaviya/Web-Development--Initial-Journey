#include <stdio.h>
#include <string.h>

int main()
{
    char st1[] = "This";
    char st2[] = " Jaimin";

    strcat(st1, st2); // string concatenate

    printf("Now the st1 is %s\n", st1);
    printf("Now the st2 is %s", st2);

    return 0;
}