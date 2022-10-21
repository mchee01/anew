#include "libcheckprime.h"
#include <stdio.h>
void main() {

  while (1) {
    int n;
    printf("\nInput Integer=>");
    scanf("%d",&n);
    if(n==0){
      break;
    }if(checkprime(n) == n){
      printf("%d is a prime number \n",n );
    }else{
      printf("%d is not prime number \n",n );
    }
  }

}
