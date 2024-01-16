#include <stdio.h>
#include <string.h>

int main()
{
    char st1[] = "This";
    char st2[] = "Jaimin";

    strcpy(st2, st1);

    printf("Now the st2 is %s", st2);

    return 0;
}