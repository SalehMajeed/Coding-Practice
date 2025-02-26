function getSingleElement(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const val = (map[arr[i]] || 0) + 1;
    map.set(arr[i], val);
  }

  for (const [key, val] of map) {
    if (val === 1) {
      return key;
    }
  }

  return -1;
}

console.log(getSingleElement([4, 1, 2, 1, 2]));
