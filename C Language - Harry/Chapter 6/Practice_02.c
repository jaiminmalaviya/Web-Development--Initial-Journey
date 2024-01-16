#include <stdio.h>

int add(int a)
{
    printf("The address of a is %u \n", &a);
}

int main()
{
    int i = 5;

    printf("The value of i is %d \n", i);
    add(i);
    printf("The address of i is %u \n", &i);

    return 0;
}