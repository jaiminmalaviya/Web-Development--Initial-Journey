#include <stdio.h>

int main()
{
    FILE *ptr;
    int a, b, c;

    ptr = fopen("harry.txt", "r");

    fscanf(ptr, "%d \n", &a);
    fscanf(ptr, "%d \n", &b);
    fscanf(ptr, "%d \n", &c);
    fclose(ptr);

    printf("The values of a,b and c is %d, %d, %d", a, b, c);

    return 0;
}