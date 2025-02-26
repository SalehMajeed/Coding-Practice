function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result[result.length - 1] !== arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([]));
console.log(removeDuplicates([1, 2, 3]));
console.log(removeDuplicates([42]));
console.log(removeDuplicates([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4]));
