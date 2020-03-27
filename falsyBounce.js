function bouncer(arr) {
    // Don't show a false ID to this bouncer.
      var array1 = arr.filter(data => {
      if(data === false || data === null || data === 0 || data === undefined || data === NaN || data === ""){
     return false;
      }
    
    });
    return array1;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));