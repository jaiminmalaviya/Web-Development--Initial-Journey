#include <stdio.h>

int main()
{
    char str[] = "iu";
    char *a = str;

    printf("Your name is %s\n", a);
    printf("Your name is %u\n", a);
    printf("Your name is %u\n", str);

    a = "jaimin";
    printf("Your name is %u\n", a);
    a = "jmin";
    printf("Your name is %u\n", a);
    printf("Your name is %u\n", str);

    // str = "dubi";

    printf("Your name is %s\n", a);
    printf("Your name is %s\n", str);
    printf("Enter your name: ");
    scanf("%s", str);
    printf("Your name is %s\n", str);
    scanf("%s", str);
    printf("Your name is %c", str[1]);

    return 0;
}