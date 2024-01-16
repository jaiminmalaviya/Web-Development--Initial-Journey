// Convert character into ASCII value and vice versa
#include <stdio.h>

int main()
{
    char a;
    int b;

    printf("Enter the character: ");
    scanf("%c", &a);
    b = a;
    printf("ASCII value of the character: %d", b);

    printf("\nEnter the ASCII value: ");
    scanf("%d", &b);
    a = b;
    printf("Character is: %c", a);

    return 0;
}