//sum of first ten natural number
#include<stdio.h>

int main()
{
    int a=1, sum=0;

    do
    {
        sum = sum + a;
        a++;
    } while(a<=10);
    
    printf("Total sum = %d", sum);
    
    return 0;
}