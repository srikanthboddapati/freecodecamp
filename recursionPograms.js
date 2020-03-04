function factorialOfNumber(num) {
  
  if( num == 0){
      return 1;
  }
return num*factorialOfNumber(num-1);
}

console.log( factorialOfNumber(5) );
