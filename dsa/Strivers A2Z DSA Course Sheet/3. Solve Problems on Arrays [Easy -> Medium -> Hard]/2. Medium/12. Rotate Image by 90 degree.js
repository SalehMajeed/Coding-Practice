function rotateBy90(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr[0].length; j++) {
        [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
      }
    }
  
    for(let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].reverse();
    }
    return arr;
  }
  
  console.log(
    rotateBy90([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  );
  