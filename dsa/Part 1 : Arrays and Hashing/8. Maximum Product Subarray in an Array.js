var maxProduct = function (nums) {
  let prod1 = nums[0];
  let prod2 = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let tmp = Math.max(nums[i], prod1 * nums[i], prod2 * nums[i]);
    prod2 = Math.min(nums[i], prod1 * nums[i], prod2 * nums[i]);
    prod1 = tmp;
    result = Math.max(result, prod1);
  }
  return result;
};

console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
