#include <stdio.h>
#include <string.h>

typedef struct employee
{
    int code;
    float salary;
    char name[10];
} em;

void show(em emp)
{
    printf("Code of employee is: %d\n", emp.code);
    printf("Salary of employee is: %.2f\n", emp.salary);
    printf("Name of employee is: %s\n", emp.name);
}

int main()
{
    em e1;
    // em *ptr;

    e1.code = 101;
    e1.salary = 11.01;
    strcpy(e1.name, "Jaimin");

    // ptr = &e1;
    // ptr->code = 101;
    // ptr->salary = 11.01;
    // strcpy(ptr->name, "Jaimin");

    show(e1);

    return 0;
}