#include<stdio.h>

int reverseArray (int ptr[])
{
    int temp;

    for(int i=0; i<5; i++)
    {
        temp = ptr[i];
        ptr[i] = ptr[9-i];
        ptr[9-i] = temp;
    }
}

int main()
{
    int arr[] = {1,2,3,4,5,6,7,8,9,10};
    
    reverseArray(arr);

    for(int i=0; i<10; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}