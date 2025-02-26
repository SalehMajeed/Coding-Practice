function secondLargest(arr) {
  let largest = Number.MIN_SAFE_INTEGER;
  let secondLargest = Number.MIN_SAFE_INTEGER;

  let smallest = Number.MAX_SAFE_INTEGER;
  let secondSmallest = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      secondLargest = largest;
      largest = arr[i];
    } else if (secondLargest < arr[i] && largest !== arr[i]) {
      secondLargest = arr[i];
    }

    if (smallest > arr[i]) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (secondSmallest > arr[i] && smallest !== arr[i]) {
      secondSmallest = arr[i];
    }
  }
  return [secondLargest, secondSmallest];
}

console.log(secondLargest([3, 1, 5, 6]));
console.log(secondLargest([1]));
console.log(secondLargest([3, 3, 3, 3]));
console.log(secondLargest([-5, -2, -1, -10]));
console.log(secondLargest([7, 4, 5, 3, 6]));
console.log(secondLargest([]));
console.log(secondLargest([1, 2, 3, 9999, 10000]));
