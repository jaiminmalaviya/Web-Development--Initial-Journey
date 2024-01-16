#include <stdio.h>

int main()
{
    FILE *ptr1;
    FILE *ptr2;
    FILE *ptr3;

    ptr1 = fopen("getcdemo.txt", "r");
    ptr2 = fopen("P_03.txt", "w");

    char c = fgetc(ptr1);
    while (c != EOF)
    {
        fputc(c, ptr2);
        // fputc(c, ptr2);
        c = fgetc(ptr1);
    }
    fclose(ptr1);

    fputc(10, ptr2);

    ptr1 = fopen("getcdemo.txt", "r");

    char d = fgetc(ptr1);
    while (d != EOF)
    {
        fputc(d, ptr2);
        // fputc(d, ptr2);
        d = fgetc(ptr1);
    }
    fclose(ptr2);

    return 0;
}