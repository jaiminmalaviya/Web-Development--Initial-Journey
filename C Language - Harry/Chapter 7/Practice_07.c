#include<stdio.h>

int main()
{
    int arr[3][10];

    
    for(int j=0; j<10; j++)
    {
        arr[0][j] = 2*(j+1); 
        arr[1][j] = 7*(j+1); 
        arr[2][j] = 9*(j+1); 
    }

    for(int i=0; i<10; i++)
    {
        if(i<1)
        {
            printf("2 * %d = %d       7 * %d = %d       9 * %d = %d\n", i+1, arr[0][i], i+1, arr[1][i], i+1, arr[2][i]);
        }
        else if(i<4)
        {
            printf("2 * %d = %d       7 * %d = %d      9 * %d = %d\n", i+1, arr[0][i], i+1, arr[1][i], i+1, arr[2][i]);
        }
        else if(i<9)
        {
            printf("2 * %d = %d      7 * %d = %d      9 * %d = %d\n", i+1, arr[0][i], i+1, arr[1][i], i+1, arr[2][i]);
        }
        else if(i<10)
        {
            printf("2 * %d = %d     7 * %d = %d     9 * %d = %d\n", i+1, arr[0][i], i+1, arr[1][i], i+1, arr[2][i]);
        }
    }
    
    return 0;
}