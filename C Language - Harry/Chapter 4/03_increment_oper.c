#include <stdio.h>

int main()
{
    int i = 5;

    printf("The value of i++ is %d \n", i++);
    printf("The value of i is %d \n", i);
    printf("The value of ++i is %d \n", ++i);
    printf("The value of i is %d \n\n", i);

    printf("The value of i-- is %d \n", i--);
    printf("The value of i is %d \n", i);
    printf("The value of --i is %d \n", --i);
    printf("The value of i is %d \n\n", i);

    i += 10; //i-=10, i*=5, i/=5, i%=5;
    printf("The value of i is %d", i);

    return 0;
}

