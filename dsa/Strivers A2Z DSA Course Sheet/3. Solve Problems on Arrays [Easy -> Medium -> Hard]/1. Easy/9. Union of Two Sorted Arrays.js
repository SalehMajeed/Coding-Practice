function union(arr1, arr2) {
  const union = [];
  const map = {};
  const len = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < len; i++) {
    if (arr1[i]) {
      map[arr1[i]] = (map[arr1[i]] || 0) + 1;

      if (map[arr1[i]] === 1) {
        union.push(arr1[i]);
      }
    }
    if (arr2[i]) {
      map[arr2[i]] = (map[arr2[i]] || 0) + 1;

      if (map[arr2[i]] === 1) {
        union.push(arr2[i]);
      }
    }
  }
  return union;
}

console.log(union([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]));
