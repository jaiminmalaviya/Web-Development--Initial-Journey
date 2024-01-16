#include <stdio.h>

int main()
{
    float a[] = {5.1, 85.70, 3.4};
    // a[] = {1.1, 5.70, 3};  this in not valid because once array is declared then we can not change entire array

    printf("Enter the value of marks for student 1: %f\n", a[0]);
    printf("Enter the value of marks for student 2: %f\n", a[1]);
    printf("Enter the value of marks for student 3: %f\n", a[2]);

    return 0;
}