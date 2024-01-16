#include <stdio.h>

void goodMorning();
void goodAfternoon();
void goodNight();

int main()
{
    goodMorning();

    return 0;
}

void goodMorning()
{
    printf("Good Morning Jaimin\n");
    goodAfternoon();
}

void goodAfternoon()
{
    printf("Good Afternoon Jaimin\n");
    goodNight();
}

void goodNight()
{
    printf("Good Night Jaimin\n");
}