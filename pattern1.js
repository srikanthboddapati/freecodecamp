function pattern1(){
    for(var i = 0;i<4;i++){
      for(var j = 0;j< 9;j++){
        if(i == j || j == 4 ||){
          console.log("*");
        }else {
          console.log("0")
        }
      }
      console.log("/n");
    }
}

pattern1();