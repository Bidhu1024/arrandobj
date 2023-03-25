const max = (num)=>{
    let result = num[0];

    for(const number of num){
        if(number>result){
            result = number;

        }

    }
    return {result};
}


const maximum = max([1,2,2,3,4,5,7,85,7,4,5,899,900])
console.log(maximum)