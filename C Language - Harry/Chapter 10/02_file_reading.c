#include <stdio.h>

int main()
{
    FILE *ptr;

    ptr = fopen("Harry.txt", "r");

    int num1;
    int num2;

    fscanf(ptr, "%d", &num1);
    fscanf(ptr, "%d", &num2);
    fclose(ptr);

    printf("THe number 1 is %d \n", num1);
    printf("THe number 2 is %d", num2);

    return 0;
}