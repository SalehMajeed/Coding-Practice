function sortColor(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    switch (arr[mid]) {
      case 0:
        [arr[mid], arr[low]] = [arr[low], arr[mid]];
        low += 1;
        mid += 1;
        break;
      case 1:
        mid += 1;
        break;
      case 2:
        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high -= 1;
        break;
    }
  }
  console.log(arr);
}

sortColor([2, 0, 2, 1, 1, 0]);
sortColor([2, 0, 1]);
