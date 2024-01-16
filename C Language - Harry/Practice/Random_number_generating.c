#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    int number;
    int number1;

    srand(time(0));
    number = (rand() % 3) + 1;
    number1 = (rand() % 3) + 1;
    printf("The number is %d \n", number1);
    printf("The number is %d", rand() % 3 + 1);

    return 0;
}