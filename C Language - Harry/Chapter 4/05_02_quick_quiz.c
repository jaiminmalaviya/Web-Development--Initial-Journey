#include <stdio.h>

int main()
{
    int i = 1, a;

    printf("Enter the number: ");
    scanf("%d", &a);

    do
    {
        printf("%d ", i);
        i++;
    } while (i <= a);

    return 0;
}