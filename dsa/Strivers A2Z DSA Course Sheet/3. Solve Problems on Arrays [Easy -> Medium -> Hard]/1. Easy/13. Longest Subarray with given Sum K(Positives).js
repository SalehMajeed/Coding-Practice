function getLongestSubarray(arr, sum) {
  let start = 0;
  let end = 0;
  let currentSum = 0;
  let maxLen = 0;
  while (end < arr.length) {
    currentSum += arr[end];

    while (currentSum > sum) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === sum) {
      const currentLen = end - start + 1;
      maxLen = Math.max(currentLen, maxLen);
    }
    end++;
  }
  return maxLen;
}

console.log(getLongestSubarray([2, 3, 5, 1, 9], 10));
console.log(getLongestSubarray([-1, 1, 1], 1));
