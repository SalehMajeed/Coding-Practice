function maxProfit(arr) {
  let minVal = Infinity;
  let maxProfit = 0;

  arr.forEach((eachVal) => {
    minVal = Math.min(minVal, eachVal);
    maxProfit = Math.max(maxProfit, eachVal - minVal);
  });

  console.log(maxProfit);
}

maxProfit([7, 1, 5, 3, 6, 4]);
