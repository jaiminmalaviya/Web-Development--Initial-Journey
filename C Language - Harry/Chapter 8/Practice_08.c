#include <stdio.h>

void present(char ptr[], char c)
{
    int count = 0;
    while (*ptr != '\0')
    {
        if (*ptr == c)
        {
            printf("Given character is present");
            return;
        }
        ptr++;
    }
    printf("Given character is not present");
}

int main()
{
    char st[] = "jaimin malaviya";
    present(st, '1');

    return 0;
}