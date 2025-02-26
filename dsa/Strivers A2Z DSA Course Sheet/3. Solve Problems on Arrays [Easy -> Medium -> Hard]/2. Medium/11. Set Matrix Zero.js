function setRowAndColumnZero(arr, rowIndex, columnIndex) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[rowIndex][i] !== 0) {
        arr[rowIndex][i] = -1;
      }
    }
  
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][columnIndex] !== 0) {
        arr[j][columnIndex] = -1;
      }
    }
  }
  
  function setZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 0) {
          setRowAndColumnZero(arr, i, j);
        }
      }
    }
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === -1) {
          arr[i][j] = 0;
        }
      }
    }
    return arr;
  }
  
  function setZero1(arr) {
    const row = new Array(arr.length).fill(0);
    const column = new Array(arr[0].length).fill(0);
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (arr[i][j] === 0) {
          row[i] = 1;
          column[j] = 1;
        }
      }
    }
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (row[i] || column[j]) {
          arr[i][j] = 0;
        }
      }
    }
    return arr;
  }
  
  console.log(
    setZero1([
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ])
  );
  