#include <stdio.h>

int main()
{
    int salery;
    float tax=0;

    printf("Enter your salery: ");
    scanf("%d", &salery);

    //(not valid) else if (250000 <= salery <= 500000)
    //(valid) else if (250000 <= salery && salery <= 500000)

    if (salery > 1000000)   
    {
        tax = tax + (salery-1000000)*0.3;
        salery = 1000000;
    }
    
    if (500000 < salery && salery <= 1000000)
    {
        tax = tax + ((salery-500000)*0.2);
        salery = 500000;
    }
    
    if (250000 < salery && salery <= 500000)   
    {
        tax = tax + (salery-250000)*0.05;
    }

    printf("Your total Tax is %.2f", tax);

    return 0;
}