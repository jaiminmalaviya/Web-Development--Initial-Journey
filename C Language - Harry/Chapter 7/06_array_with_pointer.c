#include <stdio.h>

int main()
{
    int marks[5];
    // int *ptr = &marks[0];
    int *ptr = marks;
    int *a = ptr;

    for (int i = 0; i < 5; i++)
    {
        printf("Enter the value of marks for student %d: ", i + 1);
        scanf("%d", ptr + i);

        // ptr++;
    }
    ptr[4] = 502;

    for (int i = 0; i < 5; i++)
    {
        printf("The value of marks for student %d is %d\n", i + 1, ptr[i]);
    }

    printf("%d", a[0]);

    return 0;
}