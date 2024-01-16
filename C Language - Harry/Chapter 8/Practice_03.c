#include <stdio.h>

int slice(char *ptr, int m, int n)
{
    int i = 0;
    while (i + m - 1 < n)
    {
        ptr[i] = ptr[i + m - 1];
        i++;
    }
    ptr[i] = '\0'; // \0 means end of the string
}

int main()
{
    char st[] = "Jaiminmalaviya";

    slice(st, 5, 9);
    printf("%s", st);

    return 0;
}