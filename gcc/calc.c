#include <stdio.h>
#include "libmy.h"

int main() {
  int x, y;
  printf("Input two numbers : " );
  scanf("%d %d", &x, &y);
  printf("%d + %d = %d \n", x, y, plus(x, y));
  printf("%d - %d = %d \n", x, y, minus(x, y));

  return 0;
}
