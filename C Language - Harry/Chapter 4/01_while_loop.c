#include<stdio.h>

int main()
{
    int a;

    printf("Enter the number: ");
    scanf("%d", &a);

    while (a<10)
    {
        printf("%d ", a);
        a++;
    }
    
        printf("%d ", a);

    return 0;
}