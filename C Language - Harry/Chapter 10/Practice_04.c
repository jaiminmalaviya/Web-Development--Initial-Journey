#include <stdio.h>

int main()
{
    FILE *ptr;
    ptr = fopen("P_04.txt", "w");

    int a, b;
    char str1[10];
    char str2[10];

    printf("Enter the name and salery: ");
    scanf("%s", str1);
    scanf("%d", &a);
    printf("Enter the name and salery: ");
    scanf("%s", str2);
    scanf("%d", &b);

    fprintf(ptr, "%s , %d \n", str1, a);
    fprintf(ptr, "%s , %d \n", str2, b);
    fclose(ptr);

    return 0;
}