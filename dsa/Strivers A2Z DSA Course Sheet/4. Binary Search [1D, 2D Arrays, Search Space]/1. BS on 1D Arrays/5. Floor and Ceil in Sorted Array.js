function floorCeil(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let floor = -1;
    let ceil = -1;
  
    while (low <= high) {
      const mid = parseInt((low + high) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (target > arr[mid]) {
        floor = mid;
        low = mid + 1;
      } else {
        ceil = mid;
        high = mid - 1;
      }
    }
    return [arr[floor], arr[ceil]];
  }
  
  console.log(floorCeil([3, 4, 4, 7, 8, 10], 5));
  console.log(floorCeil([3, 4, 4, 7, 8, 10], 8));
  