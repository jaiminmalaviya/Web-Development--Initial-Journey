#include <stdio.h>
#include <string.h>

int main()
{
    char st1[30];
    char st2[30];
    char c;
    int i = 0;

    printf("Enter the value of first string: ");
    scanf("%s", st1);
    // scanf("%c", &st1[0]);
    printf("Enter the value of second string character by character: ");

    while (c != '\n')
    {
        fflush(stdin); // (its happen when we use %c) its clear all the buffer value
        scanf("%c", &c);
        st2[i] = c;
        i++;
    }
    st2[i - 1] = '\0';

    printf("The value of st1 is %s\n", st1);
    printf("The value of st2 is %s\n", st2);
    printf("strcmp for these strings returns %d", strcmp(st1, st2));

    return 0;
}