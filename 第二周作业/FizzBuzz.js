let num=0;
for(let i=0;i<100;i++){
    num++;
    if (num%3==0&&num%5!=0){
        console.log("Fizz");
    }else if (num%5==0&&num%3!=0){
        console.log("Buzz");
    }else if (num%5==0&&num%3==0){
        console.log("FizzBuzz");
    }else{
        console.log(num)
    }
}