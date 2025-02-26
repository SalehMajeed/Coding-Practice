function leftByOne(arr) {
  for (let i = 1; i < arr.length; i++) {
    [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
  }
  return arr;
}

console.log(leftByOne([1, 2, 3]));
console.log(leftByOne([]));
console.log(leftByOne([42]));
console.log(leftByOne([5, 7]));
console.log(leftByOne([1, 1, 2, 2, 3, 3]));
