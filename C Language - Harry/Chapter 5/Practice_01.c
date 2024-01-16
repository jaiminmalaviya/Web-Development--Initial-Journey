#include<stdio.h>

float average(int a, int b, int c);

int main()
{
    int a, b, c;

    printf("Enter the three value: ");
    scanf("%d %d %d", &a, &b, &c);

    printf("The average value is %f", average(a, b, c));   
    return 0;
}

float average(int a, int b, int c)
{
    float avg;
    avg = (float)(a+b+c)/3;
    return avg;
}