function checkNumber(arr, target) {
    let total = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      while (target >= arr[i]) {
        target -= arr[i];
        total += 1;
      }
    }
    return total;
  }
  
  console.log(checkNumber([1, 2, 5, 10, 20, 50, 100, 500, 1000], 70));
  