#include<stdio.h>

int main()
{
    int age, vipPass;

    printf("Enter your age: \n"); 
    scanf("%d", &age);
    
    if (age<18)
    {
        printf("Enter 1, if you have vipPass otherwise Enter 0: \n");
        scanf("%d", &vipPass);
    }
 
    if ((age>=18 && age<=70) || vipPass==1)
    {
        printf("Your age is above 18 and below 70, you can drive\n");
    }
    else 
    {
        printf("you can't drive\n");
    }
    
    return 0;
}