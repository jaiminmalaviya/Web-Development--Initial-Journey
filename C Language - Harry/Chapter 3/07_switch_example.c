#include<stdio.h>

int main()
{
    int marks, num;

    printf("Enter your marks: ");
    scanf("%d", &marks);

    num = (marks-1) / 10;

    switch (num)
    {
    case 9:
        printf("Your grade is A");
        break;

    case 8:
        printf("Your grade is B");
        break;
    
    case 7:
        printf("Your grade is C");
        break;

    case 6:
        printf("Your grade is D");
        break;

    case 5:
        printf("Your grade is E");
        break;
    
    case 4:
        printf("Your grade is F");
        break;
    
    default:
        printf("Your grade is F");
        break;
    }

    return 0;
}