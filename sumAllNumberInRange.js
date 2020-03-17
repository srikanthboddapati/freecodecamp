function sumAll(arr) {
    var a = 0;
    for (var i = Math.max(...arr); Math.min(...arr) <= i; i--) {
        a += i
    }
    return a;
}
sumAll([1, 4]);