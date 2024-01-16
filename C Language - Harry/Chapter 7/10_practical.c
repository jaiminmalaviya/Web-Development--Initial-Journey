#include <stdio.h>

int main()
{
    char str[] = "peace";
    // char str[] = {'p', 'e', 'a', 'c', 'e', '\0'};
    char *s = str;
    printf("%c \n", *(s + 2));
    printf("%c \n", *s + 2);
    printf("%u \n", s);
    printf("%s \n", s);
    printf("%s \n", s + 2);

    return 0;
}