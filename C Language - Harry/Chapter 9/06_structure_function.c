#include <stdio.h>
#include <string.h>

struct employee
{
    int code;
    float salary;
    char name[10];
};

void show(struct employee *emp)
{
    printf("Code of employee is: %d\n", (*emp).code);
    printf("Salary of employee is: %f\n", (*emp).salary);
    printf("Name of employee is: %s\n", (*emp).name);
    (*emp).code = 100; // if we only make emp then this statement not work
}

int main()
{
    struct employee e1;
    struct employee *ptr;

    ptr = &e1;
    ptr->code = 101;
    ptr->salary = 11.01;
    strcpy(ptr->name, "Jaimin");

    show(&e1);
    printf("The code of employee is %d", e1.code);

    return 0;
}