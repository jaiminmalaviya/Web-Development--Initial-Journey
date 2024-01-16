#include<stdio.h>

float fahrenheit(int a);

int main()
{
    int a;

    printf("Enter the value of celcius: ");
    scanf("%d", &a);

    printf("The value of fahrenheit is %f", fahrenheit(a));

    return 0;
}

float fahrenheit(int a)
{
    float b = a*((float)9/5) + 32;
    return b;
}
