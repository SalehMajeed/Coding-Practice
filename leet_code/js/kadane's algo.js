function findMaxSumArr(arr){
    let sum = 0;
    let max = arr[0];
    arr.forEach(eachElement => {
        sum += eachElement;
        max = Math.max(max, sum);
        if(sum < 0) {
            sum = 0;
        }
    });
    return max;
}

const output = findMaxSumArr([-2,1,-3,4,-1,2,1,-5,4])
console.log(output);