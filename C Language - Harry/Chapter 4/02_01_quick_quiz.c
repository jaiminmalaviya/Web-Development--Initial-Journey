#include<stdio.h>

int main()
{
    int a=0;

    while (a>=0 && a<=20)
    {
        if (a>=10 && a<=20)
        {
            printf("%d ", a);
        }
        a++;
    }
   
    return 0;
}