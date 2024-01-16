#include <stdio.h>

int main()
{
    int a;

    printf("Enter your number: \n");
    scanf("%d", &a);

    (a < 5) ? printf("Number is less than 5") : printf("Number is not less than 5");

    return 0;
}