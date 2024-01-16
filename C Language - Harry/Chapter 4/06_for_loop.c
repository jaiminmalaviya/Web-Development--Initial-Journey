#include <stdio.h>

int main()
{
    int i = 51;

    for (int i = 0; i < 3; i++)
    {
        int i = 5;
        printf("The value of i is %d \n", i + 1);
    }

    printf("The value of i is %d \n", i);

    for (i = 3; i; i--)
    {
        int i = 2;
        printf("%d ", i);
    }

    printf("\nThe value of i is %d \n", i);

    return 0;
}