function missingNumber(arr, n) {
  let totalSum = 0;
  let numSum = arr[0];
  for (let i = 1; i <= n; i++) {
    if (arr[i] !== undefined) {
      numSum += arr[i];
    }
    totalSum += i;
  }
  return totalSum - numSum;
}
console.log(missingNumber([1, 2, 4, 5], 5));
