#include <stdio.h>
#include <math.h>

int main()
{
    int side;

    printf("Enter the side: ");
    scanf("%d", &side);
    printf("Area of the square is %d", (int)pow(side, 2));
    // pow(a,b) only return float value

    return 0;
}