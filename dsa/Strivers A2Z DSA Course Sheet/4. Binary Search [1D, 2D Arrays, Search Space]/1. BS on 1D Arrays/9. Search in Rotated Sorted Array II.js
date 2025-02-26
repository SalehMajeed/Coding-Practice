function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) return true;
        if(nums[mid] === nums[left] && nums[mid] === nums[right]) {
            left++;
            right--;
            continue;
        }
        if(nums[left] <= nums[mid]) {
            if(target >= nums[left] && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if(target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return false;
};

console.log(search([4,5,6,6,7,0,1,2,4,4], 0)); // true
console.log(search([4,5,6,6,7,0,1,2,4,4], 3)); // false
console.log(search([1,0,1,1,1], 0)); // true
console.log(search([2,5,6,0,0,1,2], 0)); // true
console.log(search([2,5,6,0,0,1,2], 3)); // false
console.log(search([1,1,1,1,1,2,1,1,1], 2)); // true
console.log(search([1,2,3,4,5,6,7,8,9,10], 5)); // true
console.log(search([10,20,30,40,50,5,7,8], 5)); // true
console.log(search([10,20,30,40,50,5,7,8], 35)); // false
console.log(search([1,3,1,1,1], 3)); // true
console.log(search([1,1,1,3,1], 3)); // true
console.log(search([1], 1)); // true
console.log(search([], 1)); // false