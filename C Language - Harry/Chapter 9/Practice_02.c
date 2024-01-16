#include <stdio.h>

typedef struct vector
{
    int x;
    int y;
} s;

s sumvector(s v1, s v2)
{
    s result;

    result.x = v1.x + v2.x;
    result.y = v1.y + v2.y;

    return result;
}

int main()
{
    s v1, v2;
    s sum;

    v1.x = 5;
    v1.y = 3;

    v2.x = 24;
    v2.y = 15;

    sum = sumvector(v1, v2);

    printf("X dim is %d and Y dim is %d", sum.x, sum.y);

    return 0;
}
