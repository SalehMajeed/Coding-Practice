function nextPermutation(nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return [...nums.slice(0, i + 1), ...nums.slice(i + 1).reverse()];
  //   reverse(nums, i + 1);
  //   return nums;
}

function reverse(nums, start) {
  let end = nums.length - 1;
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

console.log(nextPermutation([1, 2, 3])); // [1,3,2]
console.log(nextPermutation([3, 2, 1])); // [1,2,3]
console.log(nextPermutation([1, 1, 5])); // [1,5,1]
