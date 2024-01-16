#include<stdio.h>

int main()
{
    int i=5, *a, **b;
    a = &i;
    b = &a;

    printf("The value of i is %d\n", **b);

    return 0;
}