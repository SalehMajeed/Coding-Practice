function findFirst(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let first = -1;
  
    while (low <= high) {
      const mid = parseInt((low + high) / 2);
      if (target === arr[mid]) {
        first = mid;
        high = mid - 1;
      } else if (target < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return first;
  }
  
  function findLast(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let last = -1;
  
    while (low <= high) {
      const mid = parseInt((low + high) / 2);
      if (target === arr[mid]) {
        last = mid;
        low = mid + 1;
      } else if (target < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return last;
  }
  
  function findOccurance(arr, target) {
    const firstOccur = findFirst(arr, target);
    const lastOccur = findLast(arr, target);
    return [firstOccur, lastOccur];
  }
  
  console.log(findOccurance([2, 4, 6, 8, 8, 8, 11, 13], 8));
  console.log(findOccurance([2, 4, 6, 8, 8, 8, 11, 13], 10));
  console.log(findOccurance([1, 2, 2, 3, 3, 3, 4, 5, 5, 6], 3));
  console.log(findOccurance([1, 2, 2, 3, 3, 3, 4, 5, 5, 6], 5));
  