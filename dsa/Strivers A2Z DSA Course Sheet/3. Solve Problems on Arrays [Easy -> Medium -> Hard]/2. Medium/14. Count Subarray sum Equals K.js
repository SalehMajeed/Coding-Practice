function subArrayOfK(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum === k) {
          count++;
        }
      }
    }
    return count;
  }
  
  function subArrayOfK1(arr, k) {
    const map = new Map();
    let count = 0;
    let preSum = 0;
  
    map.set(0, 1);
    for (let i = 0; i < arr.length; i++) {
      preSum += arr[i];
  
      const removed = preSum - k;
      count += map.get(removed) || 0;
  
      map.set(preSum, (map.get(preSum) || 0) + 1);
    }
    return count;
  }
  
  console.log(subArrayOfK1([3, 1, 2, 4], 6));
  console.log(subArrayOfK1([1, 2, 3], 3));
  