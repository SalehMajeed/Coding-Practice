function findMissingRepeatingNumbers(arr) {
  const nums = {};
  let missing = -1;
  let repetitive = -1;
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    nums[currentNum] = (nums[currentNum] || 0) + 1;
  }

  for(let i = 1; i <= arr.length; i++) {
    if(nums[i] > 1) repetitive = i;
    else if(nums[i] === undefined) missing = i;
  }

  return {repetitive, missing};
}

console.log(findMissingRepeatingNumbers([1, 2, 3, 2])); // {2, 4}
