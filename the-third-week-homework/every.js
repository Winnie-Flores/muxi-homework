function every(array, test) {
    for(let i of array){
        if(!test(i)) return false;
    }
    return true;
    }
    console.log(every([1, 3, 5], n => n < 10));
    // → true
    console.log(every([2, 4, 16], n => n < 10));
    // → false
    console.log(every([], n => n < 10));
    // → true
    
//用some
function everyplus(array,test){
    return !array.some((element)=>!test(element));
}
console.log(everyplus([1, 3, 5], n => n < 10));
    // → true
    console.log(everyplus([2, 4, 16], n => n < 10));
    // → false
    console.log(everyplus([], n => n < 10));
    // → true