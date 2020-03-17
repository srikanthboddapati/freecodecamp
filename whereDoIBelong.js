function getIndexToIns(arr, num) {
    var resultArray = arr.sort(function (a, b) { return a - b });
    var flag = false;
    if (resultArray.length > 0) {
        for (var i = 0; i < resultArray.length - 1; i++) {
            if (num > resultArray[i] && num <= resultArray[i + 1]) {
                return i + 1;
            }
            if (resultArray[0] === num) {
                return 0;
            }
        }
        flag = true;
    }
    if (flag) {
        return resultArray.length;
    }
    else {
        return 0;
    }

}

getIndexToIns([2, 5, 10], 15);
