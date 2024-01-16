#include <stdio.h>

int main()
{
    int a, b, c;
    float total;

    printf("Enter your marks of English:");
    scanf("%d", &a);
    printf("Enter your marks of Maths:");
    scanf("%d", &b);
    printf("Enter your marks of PPS:");
    scanf("%d", &c);

    total = (a+b+c)/3.;

    if ((a >= 33) && (b >= 33) && (c >= 33) && total>33)
    {
        printf("Congratulation, Your percentage is %.2d and You pass", (int) total);
    }
    else
    {
        printf("Your percentage is %.2f and You fail, Try next time", total);
    }

    // ((a >= 33) && (b >= 33) && (c >= 33) && ((a + b + c) > 40)) ? printf("Congratulation, You Pass") : printf("You Fail, Try next time");

    return 0;
}
