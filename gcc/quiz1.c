#include "libchecked.h"
#include <stdio.h>
int main() {
  int number;
  printf("Input num :");
  scanf("%d",&number);
  if(checked(number)==1){
    printf("%d is odd number~!!\n",number);
  }else if(checked(number)==0){
    printf("%d is even number~!!\n",number);
  }else if(checked(number)!=0||checked(number)!=1){
    printf("%d Not is number\n",number);
  }
  return 0;
}
