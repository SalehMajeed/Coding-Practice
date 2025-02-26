function moveZerosToEnd(arr) {
  let fixedPositionIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[fixedPositionIndex], arr[i]] = [arr[i], arr[fixedPositionIndex]];
      fixedPositionIndex++;
    }
  }
  return arr;
}

console.log(moveZerosToEnd([0, 2, 0, 3, 0, 4, 5, 0]));
console.log(moveZerosToEnd([1, 2, 3, 4, 5]));
console.log(moveZerosToEnd([0, 0, 0, 0, 0]));
console.log(moveZerosToEnd([]));
console.log(moveZerosToEnd([1, 0, 2, 0, 3, 0]));
