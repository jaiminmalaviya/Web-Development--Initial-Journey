#include <stdio.h>

typedef struct date
{
    int date;
    int month;
    int year;
} date;

int datecmp(date d1, date d2)
{
    if (d1.year > d2.year)
    {
        return -1;
    }
    if (d1.year < d2.year)
    {
        return 1;
    }

    if (d1.month > d2.month)
    {
        return -1;
    }
    if (d1.month < d2.month)
    {
        return 1;
    }

    if (d1.date > d2.date)
    {
        return -1;
    }
    if (d1.date < d2.date)
    {
        return 1;
    }
    printf("jaimin \n"); // if function return value than after not run
    return 0;
}

int main()
{
    date d1 = {14, 10, 2002};
    // date d2 = {14, 10, 2002};
    date d2 = {21, 5, 2002};

    // d1 = {14, 10, 2002};  that's not right
    // d2 = {21, 5, 2003};

    printf("Birth date is: %d/%d/%d \n", d1.date, d1.month, d1.year);
    printf("Birth date is: %d/%d/%d \n", d2.date, d2.month, d2.year);

    int a = datecmp(d1, d2);

    printf("Date comparison function return: %d", a);

    return 0;
}