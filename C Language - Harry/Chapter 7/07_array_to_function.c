#include <stdio.h>

void printarray(int ptr[], int n);

int main()
{
    int array[] = {15, 54, 554, 54, 545, 454, 5, 545};

    printf("%u \n", array);
    printf("%d \n", *(array + 2));
    printarray(array, 8); // call by reference
    printf("The value of Array[5] is %d", array[4]);

    return 0;
}

void printarray(int ptr[], int n)
//  here int ptr[] means we declare array of ptr & here ptr means &ptr[0]
// that means ptr[] = *ptr
// that means ptr[i] = *(ptr+i)
{
    for (int i = 0; i < n; i++)
    {
        printf("The value of element %d is %d\n", i + 1, *(ptr + i));
    }
    ptr[4] = 10;
}

// void printarray(int *ptr, int n)
// {
//     for (int i = 0; i < n; i++)
//     {
//         printf("The value of element %d is %d\n", i + 1, ptr[i]);
//     }
//     ptr[4] = 100;
// }
