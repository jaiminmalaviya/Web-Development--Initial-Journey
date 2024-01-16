#include <stdio.h>
#include <string.h>

struct employee
{
    int code;
    float salary;
    char name[10];
};

int main()
{
    int a = 5;
    float b = 54.545;
    char c = 'J';

    struct employee e1;
    e1.code = 21;
    e1.salary = 524.475;
    // e1.name = "Jaimin";  --> won't work
    strcpy(e1.name, "Jaimin");

    printf("%d\n", e1.code);
    printf("%.2f\n", e1.salary);
    printf("%s\n", e1.name);

    return 0;
}