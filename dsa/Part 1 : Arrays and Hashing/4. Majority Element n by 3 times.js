var majorityElement = function (nums) {
  const counts = {};
  const result = [];
  const divideLimit = Math.floor(nums.length / 3);
  for (let i = 0; i < nums.length; i++) {
    const curentNum = nums[i];
    if (curentNum in counts) {
      counts[curentNum] += 1;
    } else {
      counts[curentNum] = 1;
    }
  }
  Object.keys(counts).map((eachKey) => {
    const currentVal = counts[eachKey];
    if(currentVal > divideLimit) {
        result.push(eachKey)
    }
  });
  return result;
};

console.log(majorityElement([3, 2, 3])); // [3]
console.log(majorityElement([1])); // [1]
console.log(majorityElement([1, 2])); // [1, 2]
