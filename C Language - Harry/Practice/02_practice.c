#include <stdio.h>
int main()
{
	int a = 10, b = 20, c = 30;

	if (c > b > a) // that is wrong, write (c>b && b>a)
	{
		printf("TRUE");
	}
	else
	{
		printf("FALSE");
	}
	return 0;
}