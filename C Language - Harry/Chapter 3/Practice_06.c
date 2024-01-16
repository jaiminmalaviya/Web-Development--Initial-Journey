#include<stdio.h>

int main()
{
    int a,b,c,d,num,ans;

    printf("Enter four number: ");
    scanf("%d %d %d %d", &a, &b, &c, &d);

    num = a;

    if (a>b)
    {
       if (a>c)
       {
           if (a>d)
           {
               num = a;
           }
           else
           {
               num = d;
           }   
       }
       else
       {
           if (c>d)
           {
               num = c;
           }
           else
           {
               num = d;
           }
           
       }
       
    }
    else
    {
        if (b>c)
       {
           if (b>d)
           {
               num = b;
           }
           else
           {
               num = d;
           }   
       }
       else
       {
           if (c>d)
           {
               num = c;
           }
           else
           {
               num = d;
           }
           
       }
    }
    
    printf("Greatest number is %d", num);

    return 0;
}