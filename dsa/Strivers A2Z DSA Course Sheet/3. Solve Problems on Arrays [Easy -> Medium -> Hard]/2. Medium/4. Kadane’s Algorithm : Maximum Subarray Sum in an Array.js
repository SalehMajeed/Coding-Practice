function kadanesAlgo(arr) {
    let sum = -Infinity;
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
      const currentEle = arr[i];
      currentSum += currentEle;
      if (currentSum >= sum) {
        sum = currentSum;
      }
      if (currentSum <= 0) {
        currentSum = 0;
      }
    }
    return sum;
  }
  
  console.log(kadanesAlgo([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  console.log(kadanesAlgo([-6, -2, -3, -4, -5]));
  console.log(kadanesAlgo([]));
  console.log(kadanesAlgo([5]));
  