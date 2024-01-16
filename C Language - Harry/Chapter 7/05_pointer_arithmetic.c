#include <stdio.h>

int main()
{
    int i = 5, x;
    int *ptr1 = &i;
    int *ptr11 = &i;
    printf("The value of ptr is %u\n", ptr1);
    ptr1 = ptr1 + 15;
    printf("The value of ptr is %u\n\n", ptr1);

    char c = '5', z;
    char *ptr2 = &c;
    char *ptr22 = &c;
    printf("The value of ptr is %u\n", ptr2);
    ptr2 = ptr2 + 11;
    printf("The value of ptr is %u\n\n", ptr2);

    z = ptr1 - ptr11;
    printf("The value of ptr is %d\n\n", z);

    float y = 2;
    float f = 5;
    float *ptr3 = &f;
    float *ptr33 = &y;
    printf("The value of ptr is %u\n", ptr3);
    printf("The value of ptr is %u\n", ptr33);
    ptr3 += 5;
    printf("The value of ptr is %u\n\n", ptr3);

    y = ptr3 - ptr33;
    printf("The value of ptr is %f\n", y);

    return 0;
}