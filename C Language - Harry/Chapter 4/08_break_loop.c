#include <stdio.h>

int main()
{
    int i = 0;

    do
    {
        printf("%d \n", i);
        if (i == 5)
        {
            break;
        }
        i++;
    } while (i < 1000);

    return 0;
}