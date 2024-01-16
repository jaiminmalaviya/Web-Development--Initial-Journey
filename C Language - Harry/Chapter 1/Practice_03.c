#include <stdio.h>

int main()
{
    int radius = 3;
    float pi = 3.14;
    int height = 3;

    printf("The area of this circle is %f\n", pi * radius * radius);
    printf("Volume of this cylinder is %f\n", pi * radius * radius * height);

    return 0;
}