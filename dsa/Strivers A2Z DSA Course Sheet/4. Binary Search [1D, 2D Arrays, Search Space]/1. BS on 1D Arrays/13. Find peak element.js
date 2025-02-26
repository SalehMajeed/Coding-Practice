function findPeakElement(arr) {
  const len = arr.length;

  if (len === 1) {
    return 0;
  }

  if (arr[0] > arr[1]) {
    return 0;
  }

  if (arr[len - 1] > arr[len - 2]) {
    return len - 1;
  }

  let low = 0;
  let high = len - 2;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    }

    if (arr[mid] > arr[mid - 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7, 8, 5, 1]));
console.log(findPeakElement([5]));
console.log(findPeakElement([3, 7]));
console.log(findPeakElement([1, 3, 5, 4, 2, 6, 8, 7, 9]));
console.log(findPeakElement([1, 2, 3, 4, 5]));
