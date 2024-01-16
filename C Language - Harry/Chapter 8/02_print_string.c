#include <stdio.h>

int main()
{
    // char str[] = {'J','a','i','m','i','n','\0'};
    char str[] = "Jaimin malaviya";
    char *ptr = str;

    while (*ptr != '\0')
    {
        printf("%c", *ptr);
        ptr++;
    }
    return 0;
}