function countOccurance(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
      return 0;
    }
  
    const mid = parseInt((low + high) / 2);
    if (target === arr[mid]) {
      const first = countOccurance(arr, target, low, mid - 1);
      const last = countOccurance(arr, target, mid + 1, high);
      return first + last + 1;
    } else if (target > arr[mid]) {
      return countOccurance(arr, target, mid + 1, high);
    } else {
      return countOccurance(arr, target, low, mid - 1);
    }
  }
  
  console.log(countOccurance([2, 2, 3, 3, 3, 3, 4], 3));
  console.log(countOccurance([1, 1, 2, 2, 2, 2, 2, 3], 2));
  console.log(countOccurance([1, 2, 2, 2, 3, 4, 4, 5, 6], 2));
  console.log(countOccurance([1, 2, 2, 2, 3, 4, 4, 5, 6], 4));
  console.log(countOccurance([1, 2, 2, 2, 3, 4, 4, 5, 6], 7));
  