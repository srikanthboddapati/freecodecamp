function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var array1 = [];
    for (var i = 0; i < arr.length; i++) {
        var x = Boolean(arr[i]);
        if (x) {
            array1.push(arr[i]);
        }
    }
    return array1;
}

bouncer([7, "ate", "", false, 9]);