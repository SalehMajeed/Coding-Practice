const arr = [13, 46, 24, 52, 20, 9];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    while (j >= 0 && arr[i] < arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j--;
    }
  }
  return arr;
}

console.log(insertionSort(arr));
