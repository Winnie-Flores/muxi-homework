let block="";
let size=8;
for (let y=0;y<size;y++){
    for (let x=0;x<size;x++){
        if ((x+y)%2==0){
            block+=" ";
        }else{
            block+="#";
        }
    }
    block+="\n";
}
console.log(block)