function searchRotatedArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = parseInt((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      }
      if (arr[left] <= arr[mid]) {
        if (arr[left] <= target && target <= arr[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        if (arr[mid] <= target && target <= arr[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
    return -1;
  }
  
  console.log(searchRotatedArray([7, 8, 9, 1, 2, 3, 4, 5, 6], 9));
  