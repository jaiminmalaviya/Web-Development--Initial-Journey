#include <stdio.h>

int main()
{
    FILE *ptr;

    ptr = fopen("getcdemo.txt", "r");

    printf("The value of my character is %c\n", fgetc(ptr));
    printf("The value of my character is %c\n", fgetc(ptr));
    printf("The value of my character is %c\n", fgetc(ptr));
    printf("The value of my character is %c\n", fgetc(ptr));
    printf("The value of my character is %c\n", fgetc(ptr));
    printf("The value of my character is %c\n", fgetc(ptr));

    ptr = fopen("generated.txt", "w");
    fputc('j', ptr);
    fputc('a', ptr);
    fputc('i', ptr);
    fputc('m', ptr);
    fputc('i', ptr);
    fputc('n', ptr);

    fclose(ptr);

    return 0;
}