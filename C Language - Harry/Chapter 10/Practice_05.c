#include <stdio.h>

int main()
{
    FILE *ptr;
    FILE *ptr2;
    int num;

    ptr = fopen("P_05.txt", "r");
    // ptr2 = fopen("P_05.txt", "w");  that is wrong, don't run this two instruction together

    fscanf(ptr, "%d", &num);

    ptr2 = fopen("P_05.txt", "w");
    printf("%d", num);
    fprintf(ptr2, "%d", 2 * num);

    return 0;
}