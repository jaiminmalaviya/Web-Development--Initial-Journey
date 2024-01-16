#include <stdio.h>

int sum(int a);

int main()
{
    int n;

    printf("Enter the value of n: ");
    scanf("%d", &n);

    printf("Sum of the first %d natural number is %d", n, sum(n));

    return 0;
}

int sum(int a)
{
    int result;
    if (a == 1)
    {
        return 1;
    }
    else
    {
        result = a + sum(a - 1);
        return result;
    }
}
