const arr = [13, 46, 24, 52, 20, 9, 1];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const left = [];
  const right = [];
  const pivot = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  const leftQuickSort = quickSort(left);
  const rightQuickSort = quickSort(right);
  return [...leftQuickSort, pivot, ...rightQuickSort];
}

console.log(quickSort(arr));
