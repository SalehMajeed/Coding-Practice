function highLowFreq(arr) {
  const map = {};
  arr.forEach((eachEle) => {
    map[eachEle] = (map[eachEle] || 0) + 1;
  });

  let minFreq = arr.length;
  let maxFreq = 0;
  let minEle = 0;
  let maxEle = 0;

  for (const eachValue in map) {
    if (map[eachValue] > maxFreq) {
      maxEle = eachValue;
      maxFreq = map[eachValue];
    }

    if (map[eachValue] < minFreq) {
      minEle = eachValue;
      minFreq = map[eachValue];
    }
  }
  return { [minEle]: minFreq, [maxEle]: maxFreq };
}

console.log(highLowFreq([10, 5, 10, 15, 10, 5]));
