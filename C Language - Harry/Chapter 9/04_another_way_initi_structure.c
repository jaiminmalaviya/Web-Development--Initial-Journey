#include<stdio.h>

struct employee
{
    int code;
    float salary;
    char name[10];
};

int main()
{
    struct employee jaimin = {100, 35.15, "jaimin"};

    printf("Code is: %d\n", jaimin.code);
    printf("Salary is: %f\n", jaimin.salary);
    printf("Name is: %s\n", jaimin.name);
    
    return 0;
}