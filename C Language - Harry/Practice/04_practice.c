#include <stdio.h>

int main()
{
    char str[] = "Jaimin Malaviya";
    *(str + 3) = '5';
    printf("%s", str);

    // char *str = "Jaimin Malaviya";
    // *(str + 3) = '5';
    // printf("%s", str);

    // for indivisual change in string use str[] instead of *str &
    // for whole change in string use *str instead o str[]

    return 0;
}