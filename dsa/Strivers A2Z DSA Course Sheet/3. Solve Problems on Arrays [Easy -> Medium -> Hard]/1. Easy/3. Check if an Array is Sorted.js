function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (!(arr[i - 1] <= arr[i])) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([5, 4, 3, 2, 1]));
console.log(isSorted([1, 2, 2, 3, 4, 4, 5]));
console.log(isSorted([]));
console.log(isSorted([42]));
console.log(isSorted([-3, -2, -1, 0, 1]));
console.log(isSorted([3,4,5,1,2]));
