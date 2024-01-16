#include <stdio.h>

int pattern(int a);

int main()
{
    int n;

    printf("Enter the value of n: ");
    scanf("%d", &n);

    pattern(n);
    return 0;
}

int pattern(int a)
{
    for (int i = 1; i <= a; i++)
    {
        // for (int k = a; k > i; k--)
        // {
        //     printf(" ");
        // }
        for (int j = 1; j <= (2 * i - 1); j++)
        {
            printf("*");
        }
        printf("\n");
    }
}
