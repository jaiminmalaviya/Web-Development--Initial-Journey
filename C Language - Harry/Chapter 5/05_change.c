#include<stdio.h>

int change(int a);

int main()
{
    int b = 548;

    printf("The value of b is %d\n", b);
    change(b);
    printf("The value of b is %d\n", b);

    return 0;
}

int change(int b)
{
    b = 77;
    return 77;
}