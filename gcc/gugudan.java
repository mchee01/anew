import java.util.Scanner;

class gugudan{
  public static void main(String[] args) {
    System.out.print("구구단을 출력하는 프로그램입니다.\n 1~9까지 입력하여주세요. ->");
    Scanner sc = new Scanner(System.in);
    int gugu = sc.nextInt();
    if(gugu==0){
      System.out.println("1~9까지 입력하여 주세요.");
    } else if(gugu>1&&gugu<9){
      for(int i = 1;i<=9; i++){
        System.out.println(gugu+"x"+i+"="+(gugu*i));
      }
    }
  }
}
