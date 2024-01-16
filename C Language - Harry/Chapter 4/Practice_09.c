#include<stdio.h>

int main()
{
    int a, prime;

    printf("Enter the number: ");
    scanf("%d", &a);
    
    // for(int i=2; i<=a; i++)
    // {
    //     if (i == a)
    //     {
    //         printf("\n%d is Prime number\n\n", a);
    //         break;
    //     }     
    //     if (a%i == 0)
    //     {
    //         printf("\n%d is Composite number\n\n", a);
    //         break;
    //     }  
    // }

    for(int i=2; i<a; i++)
    {
        if(a%i == 0)
        {
            prime = 0;
            break;
        }
    }

    if(prime == 0)
    {
        printf("%d is a non prime number", a);
    }
    else
    {
        printf("%d is a prime number", a);
    }

    return 0;
}