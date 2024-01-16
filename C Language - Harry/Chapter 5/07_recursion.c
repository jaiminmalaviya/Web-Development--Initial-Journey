#include<stdio.h>

int factorial(int a);

int main()
{
    int num;

    printf("Enter the number: ");
    scanf("%d", &num);

    printf("The value of the factorial %d is %d", num, factorial(num));

    return 0;
}

int factorial(int a)
{
    printf("Calling factorial(%d)\n", a);
    if(a==1 || a==0)
    {
        return 1;
    }
    else
    {
        return a*factorial(a-1);
    }
}