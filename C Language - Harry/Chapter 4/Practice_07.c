#include<stdio.h>

int main()
{
    int a, factorial=1;

    printf("Enter the number: ");
    scanf("%d", &a);

    for(int i=1; i<=a; i++)
    {
        factorial = factorial*i;
    }

    printf("Total factorial: %d", factorial);
    
    return 0;
}