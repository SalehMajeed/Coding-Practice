function rotateByK(arr, round) {
  const result = [];
  for (let i = round; i < arr.length; i++) {
    result.push(arr[i]);
  }
  for (let i = 0; i < round; i++) {
    result.push(arr[i]);
  }
  return result;
}

console.log(rotateByK([1, 2, 3, 4, 5, 6, 7], 2));
console.log(rotateByK([3, 7, 8, 9, 10, 11], 3));
