#include <stdio.h>

int  main() {
    while(1) {
        printf("Insert number(0:Exit) : ");
        int i, j;
        scanf("%d", &i);
        if(i == 0) {
            return 0;
        } else if (i>1 && i<10) {
            for(j=1; j<=9; j++)
                printf("%d * %d = %d \n", i, j, i*j);
        } else {
            printf("Insert number 2~9. Retype Again~!!\n");
        }
    }
}
