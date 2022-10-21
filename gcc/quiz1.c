#include "libchecked.h"
#include <stdio.h>
int main() {
  int number;
  printf("Input num :");
  scanf("%d \n",&number);
  if(checked(number)==1){
    printf("%d is odd number~!!",number);
  }else if(checked(number)==0){
    printf("%d is even number~!!",number);
  }else if(checked(number)!=0||checked(number)!=1){
    printf("%d Not is number",number);
  }
  return 0;
}
