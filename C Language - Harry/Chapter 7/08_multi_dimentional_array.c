#include <stdio.h>

int main()
{
    int a = 2;
    int b = 1;
    int arr[a][b];

    for (int i = 0; i < a; i++)
    {
        for (int j = 0; j < b; j++)
        {
            printf("Enter the marks of student %d in subject %d: ", i + 1, j + 1);
            scanf("%d", &arr[i][j]);
        }
    }

    for (int i = 0; i < a; i++)
    {
        for (int j = 0; j < b; j++)
        {
            printf("The marks of student %d in subject %d is: %d\n", i + 1, j + 1, arr[i][j]);
        }
    }

    printf("%u \n", arr[0]);
    printf("%u \n", &arr[0]);
    printf("%u \n", &arr[0][0]);
    printf("%u \n", arr);

    // int *c = arr;
    printf("%d \n", *arr[0]);

    return 0;
}