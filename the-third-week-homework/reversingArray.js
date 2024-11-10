function reverseArray(array){
    let a=[];
    for(let i=array.length-1;i>=0;i--){
        a.push(array[i]);
    }
    return a;
}
function reverseArrayInPlace(array){
    for(let i=0;i<=(array.length)/2;i++){
        let m=array[i];
        array[i]=array[array.length-1-i];
        array[array.length-i-1]=m;
    }
    return arrayValue;
}
// Your code here.
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5,6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]