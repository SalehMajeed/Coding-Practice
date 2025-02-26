function twoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    arr.sort((a, b) => a > b)
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === target) {
        return [left, right];
      } else if (sum < target) left++;
      else right--;
    }
  }
  
  console.log(twoSum([2, 6, 5, 8, 11], 14));
  