#include<stdio.h>

float force(int a);

int main()
{
    int mass;

    printf("Enter the value of mass: ");
    scanf("%d", &mass);

    printf("Total force exerted by body is %f", force(mass));
    return 0;
}

float force(int a)
{
    float b = a*9.8;
    return b;
}
