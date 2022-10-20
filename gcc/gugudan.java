class gugudan{
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int gugu = sc.nextInt();
    if(gugu==0){
      System.out.println("1~9까지 입력하여 주세요.");
      return false;
    }else if(gugu>1&&gugu<9){
      for(int i = 1;i<=9 i++){
        System.out.println(gugu+"x"+i+"="+(gugu*i));
      }
    }

  }
}
