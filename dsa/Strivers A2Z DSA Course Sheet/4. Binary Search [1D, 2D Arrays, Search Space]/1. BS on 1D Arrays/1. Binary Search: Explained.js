function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = parseInt((left + right) / 2);
      if (target === arr[mid]) {
        return mid;
      } else if (target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  }
  
  console.log(binarySearch([3, 4, 6, 7, 9, 12, 16, 17], 6));
  console.log(binarySearch([], 6));
  console.log(binarySearch([6], 6));
  console.log(binarySearch([5], 6));
  console.log(binarySearch([6, 7], 6));
  console.log(binarySearch([6, 7], 7));
  console.log(binarySearch([6, 7], 5));
  console.log(binarySearch([6, 7], 8));
  const largeArray = Array.from({ length: 1000000 }, (_, index) => index);
  console.log(binarySearch(largeArray, 999999));
  console.log(binarySearch(largeArray, 1000000));
  