function stockTrack(arr) {
    let min = +Infinity;
    let max = 0;
  
    for (let i = 0; i < arr.length; i++) {
      min = Math.min(arr[i], min);
      max = Math.max(max, arr[i] - min);
    }
    return max;
  }
  
  console.log(stockTrack([7, 1, 5, 3, 6, 4]));
  