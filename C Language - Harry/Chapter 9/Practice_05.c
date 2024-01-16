#include <stdio.h>

typedef struct complex
{
    int real;
    int imag;
} c;

void display(c cnum1)
{
    printf("The real value is %d \n", cnum1.real);
    printf("The complex value is %d \n", cnum1.imag);
}

int main()
{
    c cnum[5];

    for (int i = 0; i < 5; i++)
    {
        printf("Enter the real value for %d num  ", i + 1);
        scanf("%d", &cnum[i].real);

        printf("Enter the complex value for %d num ", i + 1);
        scanf("%d", &cnum[i].imag);
    }

    for (int i = 0; i < 5; i++)
    {
        display(cnum[i]);
    }

    return 0;
}