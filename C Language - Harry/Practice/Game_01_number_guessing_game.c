#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int main()
{
    int number, a, guesses=1;

    srand(time(0));
    number = rand()%100;

    // printf("The number is %d\n", number);  

    do
    {
        printf("\nEnter the number between 1 to 100: ");
        scanf("%d", &a);

        if(a>number)
        {
            printf("\n\t****Lower number please\n");
        }
        else if(a<number)
        {
            printf("\n\t****Higher number please\n");
        }
        else
        {
            printf("\n\t****Congratulation, You guessed it in %d attempts\n", guesses);
        }

        guesses++;

    }while(a!=number);

    return 0;
}