#include<stdio.h>

int main()
{
    char character;

    printf("Enter the character: ");
    scanf("%c", &character);

    // ASCII table

    if (97<=character && character<=122)
    {
        printf("%c is Lowercase character", character);
    }
    else
    {
        printf("%c is not Lowercase character", character);
    }
          
    return 0;
}