#include <stdio.h>

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
    char str[] = "jhcgcQejbhe";
    // for indivisual change in string use str[] instead of *str

    decrypt(str);
    printf("Decrypted string is %s", str);

    return 0;
}