#include <stdio.h>

int main()
{
    FILE *ptr;

    ptr = fopen("generated.txt", "w");

    int number = 5;

    fprintf(ptr, "The nummber is %d \n", number);
    fprintf(ptr, "Thnx for using fprintf");
    fclose(ptr);

    return 0;
}