#include <stdio.h>

int display(); // Function prototype

int main()
{
    int a;
    printf("Intializing display function\n");
    display(); // Function call
    printf("Finishing display function\n");

    return 0;
}
// Function definition
int display()
{
    printf("Display function\n");
}