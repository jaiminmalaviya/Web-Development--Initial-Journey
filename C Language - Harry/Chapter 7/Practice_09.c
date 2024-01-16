#include<stdio.h>

int main()
{
    char arr[3][2][2];

    for(int i=0; i<3; i++)
    {
        for(int j=0; j<2; j++)
        {
            for(int k=0; k<2; k++)
            {
                printf("(%d %d %d) = %u \n", i, j, k, &arr[i][j][k]);
            }
        }   
    }

    return 0;
}