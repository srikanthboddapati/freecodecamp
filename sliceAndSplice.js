function frankenSplice(arr1, arr2, n) {
    var resultArray = arr1.slice(0, arr1.length);
    var resultArray1 = arr2.slice(0, arr2.length);
    var index = n;
    for (var i = 0; i < resultArray.length; i++) {
        resultArray1.splice(index, 0, resultArray[i]);
        index++;
    }
    return resultArray1;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);