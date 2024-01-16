#include <stdio.h>
#include <string.h>

typedef struct student
{
    int roll;
    char name[10];
} s;

int main()
{
    s s1;
    s *ptr = &s1;
    // ptr = &s1;

    strcpy(ptr->name, "jaimin");
    ptr->roll = 59;

    printf("The student name is %s \n", ptr->name);
    printf("The student roll number is %d", ptr->roll);

    return 0;
}