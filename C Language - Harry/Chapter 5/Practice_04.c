#include<stdio.h>

int fibonacci(int n);

int main()
{
    int n;

    printf("Enter the value of n: ");
    scanf("%d", &n);

    printf("The %dth term of the fibonacci series is %d", n,fibonacci(n));

    return 0;
}

int fibonacci(int n)
{
    int term;

    if(n==1)
    {
        return 0;
    }
    else if(n==2)
    {
        return 1;
    }
    else
    {
        term = fibonacci(n-1) + fibonacci(n-2);
        return term;
    }
}