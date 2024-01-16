//sum of first ten natural number
#include<stdio.h>

int main()
{
    int a=1, sum=0;

    while (a<=10)
    {
        sum +=  a;
        a++;
    }
    
    printf("Total sum = %d", sum);

    return 0;
}