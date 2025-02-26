const arr1 = [2, 5, 1, 3, 0];

function findLargestElement(arr, i = 1, max) {
  max = max || arr[i];
  if (arr[i - 1] > max) {
      max = arr[i - 1];
    }
    if (i >= arr.length - 1) {
    return max;
  }
  return findLargestElement(arr, i + 1, max);
}

console.log(findLargestElement(arr1));
