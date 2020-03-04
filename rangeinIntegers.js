


function rangeinIntegers(a, b) {
    if(b-a == 2){
        return [b-1];
    }else{
        var list = rangeinIntegers(a, b-1);
        list.push(b-1);
        return list;
        
    }
}
console.log( rangeinIntegers(2,9) );

/*
function rangeinIntegers(a, b){
    var array1 = [];
    for(var i=a+1;i < b;i++){
        array1.push(i);
    }
return array1;    
}

console.log(rangeinIntegers(2, 9));
*/