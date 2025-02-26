function reverseArray(arr) {
    if (arr.length < 1) return [];
    return [arr.pop()].concat(reverseArray(arr));
  }
  
  console.log(reverseArray([1, 2, 3, 4, 5]));
  