#include <stdio.h>

int main()
{
    int i = 65;
    int *j = &i; // j will now store the address of i

    printf("The value of i is %d \n", i);
    printf("The value of i is %d \n", *j);
    printf("The value of j is %d \n", *(&i));
    printf("The address of i is %u \n", &i);
    printf("The address of i is %u \n", j);
    printf("The address of j is %u \n\n", &j);

    int *p2;
    char *p1;
    p1 = (char *)200;
    p1 += 1;
    p2 = &i;
    p2 = (int *)300;

    printf("The value of p1 and p2 is %u and %u\n", p1, p2);

    int **a = &j;
    int ***b = &a;

    printf("%u %u \n", a, b);
    printf("%u ", a);

    return 0;
}