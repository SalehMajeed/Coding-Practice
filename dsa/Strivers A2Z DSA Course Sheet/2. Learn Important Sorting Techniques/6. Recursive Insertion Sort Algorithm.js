const arr = [13, 46, 24, 52, 20, 9];

function recursiveInsertionSort(arr, n) {
  if (n <= 1) {
    return;
  }
  recursiveInsertionSort(arr, n - 1);
  const lastEle = arr[n - 1];
  let i = n - 2;
  while (i >= 0 && arr[i] > lastEle) {
    arr[i + 1] = arr[i];
    i--;
  }
  arr[i + 1] = lastEle;
  return arr;
}

console.log(recursiveInsertionSort(arr, arr.length));
