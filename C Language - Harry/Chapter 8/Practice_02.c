#include <stdio.h>

int strlength(char *ptr)
{
   int len = 0;
   while (*ptr != '\0')
   {
      len++;
      ptr++;
   }
   return len;
}
int main()
{
   char st[] = "Jaimin";
   int l = strlength(st);

   printf("The length of the string is %d", l);

   return 0;
}