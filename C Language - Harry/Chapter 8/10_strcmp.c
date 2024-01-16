#include <stdio.h>
#include <string.h>

int main()
{
    char st1[] = "5";
    char st2[] = "3";

    int val = strcmp(st1, st2); // string comparison

    printf("Now the val is %d \n", val);
    printf("Now the val is %d \n", strcmp("far", "joke"));

    return 0;
}