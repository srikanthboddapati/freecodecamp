function titleCase(str) {
  var resultString = "";
  var resultArray = str.toLowerCase().split(" ");
 for(var i=0;i<resultArray.length;i++){
  resultString += resultArray[i].replace(resultArray[i].charAt(0), resultArray[i].charAt(0).toUpperCase()) + " ";
 }
return resultString.trim();
}


console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));