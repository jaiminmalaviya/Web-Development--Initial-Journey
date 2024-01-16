#include<stdio.h>

int change(int a);

int main()
{
    int i=5;

    change(i);
    printf("Value of 10 times of i is %d", i);

    return 0;
}

int change(int a)
{
    a = a * 10;
}
