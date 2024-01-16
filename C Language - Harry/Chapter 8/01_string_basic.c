#include <stdio.h>

int main()
{
    char str[] = "jaimin";
    // = {'J','a','i','m','i','n','\0'};
    char *ptr = "Jaimin malaviya";
    // char ptr[] = "Jaimin";
    // char *ptr = {'J','a','i','m','i','n','\0'};  not valid

    printf("%s \n", ptr);

    // we use scanf("%[^\n]s", str) instead of gets(str)
    // scanf("%[^\n]s", str);
    printf("%s \n", str);

    // str[] = "malaviya" this in not valid because once string is declared then we can not change entire string
    // but string defined using pointer can be reinitialized
    ptr = "malaviya";
    printf("%s \n", ptr);

    return 0;
}