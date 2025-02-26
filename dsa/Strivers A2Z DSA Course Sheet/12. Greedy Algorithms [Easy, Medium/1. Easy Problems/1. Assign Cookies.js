function assignCookies(size, greed) {
  size.sort((a, b) => a - b);
  greed.sort((a, b) => a - b);
  let satisfies = 0;
  let greedIndex = 0;
  let sizeIndex = 0;
  while (greedIndex < greed.length && sizeIndex < size.length) {
    if (size[sizeIndex] >= greed[greedIndex]) {
      satisfies++;
      greedIndex++;
    }
    sizeIndex++;
  }
  return satisfies;
}

console.log(assignCookies([1, 2, 3], [1, 1]));
console.log(assignCookies([1, 2], [1, 2, 3]));
console.log(assignCookies([1, 2, 3], [3, 2, 1]));
