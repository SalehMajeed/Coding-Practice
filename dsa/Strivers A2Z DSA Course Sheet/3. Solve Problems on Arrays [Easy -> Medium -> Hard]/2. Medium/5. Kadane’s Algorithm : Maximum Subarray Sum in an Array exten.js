function kadanesExtend(arr) {
  let max = -Infinity;
  let sum = 0;
  let start = 0;
  let end = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > max) {
      max = sum;
      end = i;
    }
    if (sum < 0) {
      sum = 0;
      start = i + 1;
    }
  }
  return arr.slice(start, end + 1);
}

console.log(kadanesExtend([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(kadanesExtend([-6, -2, -3, -4, -5]));
console.log(kadanesExtend([]));
console.log(kadanesExtend([5]));