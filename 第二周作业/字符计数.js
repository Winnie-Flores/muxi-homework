const countChar=function(string,ch){
    let a=0;
    for (let i=0;i<string.length;i++){
        if (string[i]==ch){
            a+=1;
        }
    }
    return a;
}
console.log(countChar("kakkerlak", "k"));

function countBs(string){
    return countChar(string,"B");
}
console.log(countBs("BBC"));
// → 2