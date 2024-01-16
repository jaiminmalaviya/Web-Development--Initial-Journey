#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int snakewatergun(char a, char b)
{
    // if both are equal
    if (a == b)
    {
        return 0;
    }
    // for snake and water
    if (a == 's' && b == 'p')
    {
        return 1;
    }
    if (a == 'p' && b == 's')
    {
        return -1;
    }
    // for water and gun
    if (a == 'p' && b == 'r')
    {
        return 1;
    }
    if (a == 'r' && b == 'p')
    {
        return -1;
    }
    // for gun and snake
    if (a == 'r' && b == 's')
    {
        return 1;
    }
    if (a == 's' && b == 'r')
    {
        return -1;
    }
    return 2;
}

int main()
{
    int num, win;
    char me, com;

    printf("********Enter the character********\n");
    printf("  s for scissors\n  p for paper\n  r for rock\n");
    printf("Choose your character: ");
    scanf("  %c", &me);

    srand(time(0));
    rand();
    num = rand() % 100;

    if (num < 33)
    {
        com = 's';
    }

    if (num >= 33 && num < 66)
    {
        com = 'r';
    }

    if (num >= 66 && num < 100)
    {
        com = 'p';
    }

    printf("You choose %c and Computer choose %c\n", me, com);

    win = snakewatergun(me, com);

    if (win == 1)
    {
        printf("Congratulation, You Win!");
    }
    else if (win == -1)
    {
        printf("Sorry, You Lose!");
    }
    else if (win == 0)
    {
        printf("Both are Equal, Game Draw!");
    }
    else
    {
        printf("Enter only s,w and g");
    }

    return 0;
}