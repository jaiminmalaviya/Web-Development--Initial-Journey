#include <stdio.h>
#include <string.h>

typedef struct complex
{
    int real;
    char imag[10];
} c;

int main()
{
    c c1, c2;

    c1.real = 51;
    strcpy(c1.imag, "3i");

    c2.real = 43;
    strcpy(c2.imag, "i");

    printf("The coplex number 1 is %d + %s \n", c1.real, c1.imag);
    printf("The coplex number 2 is %d + %s", c2.real, c2.imag);

    return 0;
}