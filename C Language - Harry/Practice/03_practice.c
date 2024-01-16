#include<stdio.h>

int main()
{
    int n;

    printf("Enter the number: ");
    scanf("%d", &n);

    for(int i=0; i<n; i++)
    {
        for(int a=n; a>i+1; a--)
        {
            printf(" ");
        }
        for(int j=0; j<(2*i+1); j++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}