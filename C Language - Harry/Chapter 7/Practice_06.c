#include<stdio.h>

int positiveNumCount (int ptr[])
{
    int j=0;

    for(int i=0; i<14; i++)
    {
        if(ptr[i]>0)
        {
            j++;
        }
    }
    printf("Total positive number is: %d", j);
}

int main()
{
    int arr[] = {1,-4561,6515,-151,846,2,56415,-48,1515,4,-84,84,-8,1251};

    positiveNumCount(arr);

    return 0;
}