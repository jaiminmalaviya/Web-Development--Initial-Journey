#include <stdio.h>
#include <string.h>

int main()
{
    char *str = "Jaimin bhai";
    // char str[] = {'J','a','\0','i','m','i','n','n','\0'};
    int a = strlen(str);

    printf("The length of the string is %d", a);

    return 0;
}