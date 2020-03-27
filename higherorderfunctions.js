const squareList = (arr) => {
    // Only change code below this line
    
    return arr.filter(data => data > 0 && data % 1 == 0).map(data1=> { return data1 * data1});
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
    