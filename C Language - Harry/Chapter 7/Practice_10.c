#include <stdio.h>

int main()
{
    int arr[2][2];
    int *ptr = arr[1];

    printf("%u \n", arr[1]);
    printf("%u", ptr);

    return 0;
}