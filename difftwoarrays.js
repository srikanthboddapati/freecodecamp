// function diffArray(arr1, arr2) {
//     var newArr = [];
//     // for(var i=0;i<arr2.length;i++){
//     //    if(arr1.indexOf(arr2[i]) == -1){
//     //      newArr.push(arr2[i]);
//     //    }
//     // }
//     //  for(var j=0;j<arr1.length;j++){
//     //    if(arr2.indexOf(arr1[j]) == -1){
//     //      newArr.push(arr1[j]);
//     //    }
//     // }
//     function onlyInFirst(first, second){
//       for(var i=0;i< first.length;i++){
//          if(first.indexOf(second[i]) == -1){
//            newArr.push(second[i]);
//          }
//       }
//       onlyInFirst(arr1,arr2);
//       onlyInFirst(arr2,arr1);
//     }
//     return newArr;
//   }
  
//   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  
function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }

  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));