#include <stdio.h>

int main()
{
    char *ptr = "Jaimin Bhai";
    // char ptr[] = "Jaimin Bhai";

    printf("%s", ptr);
    printf("%s", &ptr[0]);
    // puts(ptr);

    return 0;
}