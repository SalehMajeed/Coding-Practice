function getUpperBound(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
      return low;
    }
    const mid = parseInt((low + high) / 2);
    if (target >= arr[mid]) {
      return getUpperBound(arr, target, mid + 1, high);
    } else {
      return getUpperBound(arr, target, low, mid - 1);
    }
  }
  
  console.log(getUpperBound([1, 2, 2, 3], 2));
  console.log(getUpperBound([3, 5, 8, 15, 19], 9));
  console.log(getUpperBound([1, 2, 2, 3, 4, 6, 6, 6, 7], 6));
  console.log(getUpperBound([1, 2, 2, 3, 4, 6, 6, 6, 7], 5));
  console.log(getUpperBound([1, 2, 2, 3, 4, 6, 6, 6, 7], 0));
  console.log(getUpperBound([1, 2, 2, 3, 4, 6, 6, 6, 7], 8));
  