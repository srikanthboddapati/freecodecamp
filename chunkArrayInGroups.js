function chunkArrayInGroups(arr, size) {
  // Break it up.
  var x = [];
  var firstIndex = 0;
  var size1 = size;
  for(var i=0;i<arr.length;i += size1){
         var y = arr.slice(i,i+size1);
         x.push(y);
  }
  return x;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));