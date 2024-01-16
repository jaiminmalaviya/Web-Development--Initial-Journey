#include <stdio.h>

int occurence(char ptr[], char c)
{
    int count = 0;
    while (*ptr != '\0')
    {
        if (*ptr == c)
        {
            count++;
        }
        ptr++;
    }
    return count;
}
int main()
{
    char st[] = "jaimin malaviya";
    int count = occurence(st, 'i');

    printf("Occurences = %d", count);

    return 0;
}