#include<stdio.h>

int main()
{
    int arr[3][10];
    int a, b, c;

    printf("Enter the number: ");
    scanf("%d", &a);
    
    printf("Enter the number: ");
    scanf("%d", &b);
    
    printf("Enter the number: ");
    scanf("%d", &c);
    
    for(int j=0; j<10; j++)
    {
        arr[0][j] = a*(j+1); 
        arr[1][j] = b*(j+1); 
        arr[2][j] = c*(j+1); 
    }
    
    printf("\n");

    for(int i=0; i<10; i++)
    {
        printf("%d * %d = %d \n", a, i+1, arr[0][i]);
    }

    printf("\n");
    
    for(int i=0; i<10; i++)
    {
        printf("%d * %d = %d \n", b, i+1, arr[1][i]);
    }
    
    printf("\n");
    
    for(int i=0; i<10; i++)
    {
        printf("%d * %d = %d \n", c, i+1, arr[2][i]);
    }
    
    return 0;
}