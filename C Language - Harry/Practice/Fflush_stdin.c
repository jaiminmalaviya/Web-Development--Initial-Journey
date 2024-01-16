#include <stdio.h>
#include <stdlib.h> // standard library

int main()
{
    int a;
    char ch;

    // printf("Enter the number: ");
    // scanf("%d", &a);                    // this is not work because when we enter then its
    // printf("Enter the character: ");    // stored in &ch
    // scanf("%c", &ch);

    printf("Enter the number: ");
    scanf("%d", &a);
    fflush(stdin); // its clear the input buffer
    printf("Enter the character: ");
    scanf("%c", &ch);

    printf("\nThe number you entered is %d", a);
    printf("\nThe character you entered is %c", ch);

    return 0;
}