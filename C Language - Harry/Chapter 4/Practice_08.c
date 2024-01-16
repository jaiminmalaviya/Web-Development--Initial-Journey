#include<stdio.h>

int main()
{
    int a, factorial=1, i=1;

    printf("Enter the number: ");
    scanf("%d", &a);

    while( i<=a)
    {
        factorial = factorial*i;
        i++;
    }

    printf("Total factorial: %d", factorial);
    
    return 0;
}