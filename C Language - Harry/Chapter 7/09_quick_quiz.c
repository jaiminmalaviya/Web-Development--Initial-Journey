#include<stdio.h>

int main()
{
    int a = 5;
    int b = 2;
    int arr[a][b];

    for(int i=0; i<a; i++)
    {
        for(int j=0; j<b; j++)
        {
            printf("Enter the value of (%d, %d): ", i+1, j+1);
            scanf("%d", &arr[i][j]);
        }
    }
    
    for(int i=0; i<a; i++)
    {
        for(int j=0; j<b; j++)
        {
            printf("  %d ", arr[i][j]);
        }
        printf("\n");
    }

    return 0;
}