const arr = [13, 46, 24, 52, 20, 9];

function bubbleSort() {
  for (let i = 0; i < arr.length; i++) {
      for (let j = arr.length - 1; j >= i - 1; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
