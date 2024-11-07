       function range(start,end){
        let a=[];
        for(let i=0;i<=(end-start);i++){
            a.push(start+i);
        }
        return a;
       } 
       function sum(numbers){
        let sum=0;
        for(let i of numbers){
            sum+=i;
        }
        return sum;
       }
       function rangeplus(start,end,step){
        if(!step) step=1;
        let b=[];
        if(start<=end){
            for(let i=0;start+i<=end;i+=step){
                b.push(start+i);
            }
        }else{
            for(let i=0;start+i>=end;i+=step){
                b.push(start+i);
            }
        }
            return b;
        }
        console.log(range(1, 10));
        // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        console.log(rangeplus(5, 2, -1));
        // → [5, 4, 3, 2]
        console.log(rangeplus(1,10,2));
        console.log(sum(range(1, 10)));
        // → 55
       
    