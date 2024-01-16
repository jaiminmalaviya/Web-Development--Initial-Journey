#include<stdio.h>

int main()
{
    int arr[] = {1,2,3,4,5};
    int *ptr = arr;

    printf("The value of ptr+2 is %d\n", *(ptr+2));
    printf("The value of ptr is %d", *(ptr));

    return 0;
}