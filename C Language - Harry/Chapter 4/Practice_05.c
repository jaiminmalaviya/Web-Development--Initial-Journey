//sum of first ten natural number
#include<stdio.h>

int main()
{
    int a=1, sum=0;

    for (a; a<=10; a++)
    {
        sum = sum + a;
    }
    
    printf("Total sum = %d", sum);
    
    return 0;
}