function searchInsert(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
      return low;
    }
  
    const mid = parseInt((high + low) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      return searchInsert(arr, target, low, mid - 1);
    } else {
      return searchInsert(arr, target, mid + 1, high);
    }
  }
  
  console.log(searchInsert([1, 2, 4, 7], 6));
  console.log(searchInsert([1, 2, 4, 7], 2));
  