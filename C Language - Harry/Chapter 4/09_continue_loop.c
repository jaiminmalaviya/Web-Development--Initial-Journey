#include <stdio.h>

int main()
{
    int a = 0;

    while (a < 10)
    {
        a++;

        if (a != 6 && a != 5)
        {
            continue;
        }

        printf("%d ", a);
    }

    return 0;
}
