const arr = [13, 46, 24, 52, 20, 9];

function recursiveBubbleSort(arr, n) {
  if (n <= 1) {
    return arr;
  }
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    recursiveBubbleSort(arr, n - 1);
  }
  return arr;
}

console.log(recursiveBubbleSort(arr, arr.length));
