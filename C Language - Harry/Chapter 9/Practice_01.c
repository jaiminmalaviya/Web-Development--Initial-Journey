#include <stdio.h>

struct vector
{
    int x;
    int y;
};

int main()
{
    struct vector v1, v2;

    v1.x = 5;
    v1.y = 3;
    printf("X dim of V1 is %d & Y dim of V1 is %d \n", v1.x, v1.y);

    v2.x = 74;
    v2.y = 15;
    printf("X dim of V2 is %d & Y dim of V2 is %d", v2.x, v2.y);

    return 0;
}