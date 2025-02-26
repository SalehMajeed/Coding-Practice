function longestSubarrayWithSumK(arr, k) {
  const map = new Map();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }

    let rem = sum - k;
    if (map.has(rem)) {
      const len = i - map.get(rem);
      maxLen = Math.max(maxLen, len);
    }

    if(!map.has(sum)) {
        map.set(sum, i)
    }
  }
  return maxLen;
}

console.log(longestSubarrayWithSumK([-1, 1, 1], 1));
