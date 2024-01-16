#include<stdio.h>

int main()
{
    int a, b;

    printf("Enter the numbr: ");
    scanf("%d", &a);

    for (b=1; b<=10; b++)
    {
        printf("%d x %d = %d\n", a, b, a*b);
    }

    return 0;
}