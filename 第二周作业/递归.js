const isEven = function(a){
    while(a>1){
        a-=2;
    }
    while(a<0){
        a+=2;
    }
    if (a==0){
        return "true";
    }else if(a==1){
        return "false"; 
    }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));