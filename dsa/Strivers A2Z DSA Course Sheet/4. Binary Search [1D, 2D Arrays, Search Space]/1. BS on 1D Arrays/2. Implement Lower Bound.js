function getLowerBound(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
    return low;
  }
  const mid = parseInt((low + high) / 2);
  if (target > arr[mid]) {
    return getLowerBound(arr, target, mid + 1, high);
  } else {
    return getLowerBound(arr, target, low, mid - 1);
  }
}

console.log(getLowerBound([1, 2, 2, 3], 2));
console.log(getLowerBound([3, 5, 8, 15, 19], 9));
console.log(getLowerBound([1, 2, 2, 3, 4, 6, 6, 6, 7], 6));
console.log(getLowerBound([1, 2, 2, 3, 4, 6, 6, 6, 7], 5));
console.log(getLowerBound([1, 2, 2, 3, 4, 6, 6, 6, 7], 0));
console.log(getLowerBound([1, 2, 2, 3, 4, 6, 6, 6, 7], 8));
