#include<stdio.h>

int main()
{
    int i=65;
    int *j = &i;  // j will now store the address of i 

    printf("The value of i is %u \n", *j); 
    printf("The address of i is %u \n", j); 
    return 0;
}