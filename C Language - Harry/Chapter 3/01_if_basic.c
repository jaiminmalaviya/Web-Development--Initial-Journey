#include<stdio.h>

// C program to check whether a number is even or odd
int main()
{
        int a, b;

        printf("Enter the number: ");
        scanf("%d", &a);

        if (a % 2 == 0)
        {
            printf("%d is even\n", a);
        }
        else 
        {     
            printf("%d is odd\n", a);
        }
        
    return 0;
}