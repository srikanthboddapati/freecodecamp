/*function stringComparision(string1, string2){
  var firstString = string1.toString().split("");
  var secondString = string2.toString().split("");
  var x ;
  var count = 0;
  if(firstString.length >= secondString.length) {
    for(var i=0;i < firstString.length;i++) {
       if(secondString.indexOf(firstString[i]) === -1) {
          count++;
          x = false;
       }else{
          x =  true;
       }  
    }
    if(count > 0){
       x = false;
    }
    return x;
  }
  else {
     return false;
  }      
}


console.log(stringComparision("cac","caa"));
*/

function coutOfEachCharecter(string1,string2){
   var array1 = [];
   var array2 = [];
   for(var i=0;i < arguments.length;i++){
    var x = arguments[i].split("");
    var y = [];
    var visited = -1;
    for(var j=0;j<x.length;j++){
      var count =1;
      for(var k=j+1;k<x.length;k++){
       if(x[j] == x[k]){
        count++;
        y[k] = visited;
       }
      }
      if(y[j] != visited)
        y[j] = count;
    }

     for(var l=0;l<y.length;l++){
       if(y[l] != visited){
         var data = {label : x[l], count : y[l]};
         array1.push(data);
       }
     }
   } 
   return array1;
}

console.log(coutOfEachCharecter("cac","caa"));