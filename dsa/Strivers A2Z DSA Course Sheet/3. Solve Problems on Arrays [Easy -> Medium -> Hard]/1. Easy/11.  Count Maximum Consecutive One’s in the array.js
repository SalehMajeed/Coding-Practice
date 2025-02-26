function findMaxConsecutiveOnes(arr) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count += 1;
    } else if (arr[i] === 0) {
      count = 0;
    }
    max = Math.max(max, count);
  }
  return max;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
