const sumArray = (num)=>{

    let result = 0;
    for(const nums of num){
        console.log(nums);
        result = result+nums;
    }

    return {result}

}

const numss = [1,2,3,4,5]
console.log(sumArray(numss));