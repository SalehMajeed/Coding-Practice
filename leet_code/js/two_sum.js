function two_sum(nums, target) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if (nums[i] + nums[j] == target) {
                return [i,j]
            }
        }
    }
}
console.log(two_sum([2, 7, 11, 15], 9));
console.log(two_sum([3, 2, 4], 6));
console.log(two_sum([3, 3], 6));
