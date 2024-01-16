#include<stdio.h>

void SumandAvg(int x, int y, int *sum, float *avg)
{
    *sum = x + y;
    *avg = (float)(*sum)/2;
}

int main()
{
    int a=5, b=8, sum;
    float avg;

    SumandAvg(a, b, &sum, &avg);
    printf("sum: %d  ||  avg: %.2f", sum, avg);

    return 0;
}
