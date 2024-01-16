#include <stdio.h>

void encrypt(char *ptr)
{
    // char *a = ptr;
    while (*ptr != 0)
    {
        *ptr = *ptr + '1';
        ptr++;
    }
}
void decrypt(char *ptr)
{
    // char *a = ptr;
    while (*ptr != 0)
    {
        *ptr = *ptr - '1';
        ptr++;
    }
}
int main()
{
    char str[] = "Jaimin Malaviya";
    // *(str + 3) = '5';
    // printf("%s", str);
    // for indivisual change in string use str[] instead of *str &
    // for whole change in string use *str instead of str[]

    encrypt(str);
    printf("Encrypted string is %s\n", str);

    decrypt(str);
    printf("Decrypted string is %s", str);

    return 0;
}