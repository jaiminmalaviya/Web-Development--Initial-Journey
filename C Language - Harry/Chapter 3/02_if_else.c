#include<stdio.h>

int main()
{
    int age;

    printf("Enter your age:\n");
    scanf("%d", &age);

    if (age>=90)
    {
        printf("Your age is above 90, you can't drive\n");
    }
    else 
    {
        printf("you can drive\n");
    }
    
    if (age==50)
    {
        printf("half century\n");
    }
    
    return 0;
}