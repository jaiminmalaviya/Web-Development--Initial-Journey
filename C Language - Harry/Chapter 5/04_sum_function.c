#include <stdio.h>

int sum(int a, int b);

int main()
{
    int c;

    c = sum(5, 27);

    printf("The value of c is %d", c);

    return 0;
}

int sum(int a, int b)
{
    int c;
    c = a + b;
    return c;
}