#include <stdio.h>

int main()
{
    // char *str;
    char str[100];

    // gets not work with pointer string
    printf("Enter your name: ");
    gets(str);
    puts(str);
    gets(str);
    puts(str);

    return 0;
}