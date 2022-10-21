#include "libcheckprime.h"
#include <stdio.h>
void main() {
  int n;
  printf("\nInput Integer=>");
  scanf("%d",&n);
  while (1) {
    if(n==0){
      break;
    }if(checkprime(n) == n){
      printf("%d is a prime number \n",n );
      break;
    }else{
      printf("%d is not prime number \n",n );
      break;
    }
  }

}
