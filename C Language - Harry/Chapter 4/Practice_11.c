#include<stdio.h>

int main()
{
    int a, i=2;

    printf("Enter the number: ");
    scanf("%d", &a);
    
    do
    {
        if (i == a)
        {
            printf("\n%d is Prime number\n\n", a);
            break;
        }     
        if (a%i == 0)
        {
            printf("\n%d is Composite number\n\n", a);
            break;
        } 
        i++; 
    }while(i<=a);
    
    return 0;
}