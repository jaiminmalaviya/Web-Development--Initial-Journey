#include <stdio.h>

int main()
{
    int a;

    printf("Enter the number:");
    scanf("%d", &a);

    for (a; a; a--)
    {
        printf("The value of i is %d \n", a);
    }

    return 0;
}