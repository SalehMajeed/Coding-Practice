function nextPermutation(arr) {
    let index = -1;
    for (let i = arr.length - 2; i >= 0; i--) {
      if (arr[i] < arr[i + 1]) {
        index = i;
        break;
      }
    }
  
    if (index === -1) {
      return arr.reverse();
    }
  
    for (let i = arr.length - 1; i > index; i--) {
      if (arr[i] > arr[index]) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
        break;
      }
    }
  
    arr.splice(
      index + 1,
      arr.length - index - 1,
      ...arr.slice(index + 1).reverse()
    );
    return arr;
  }
  
  console.log(nextPermutation([1, 3, 2]));
  console.log(nextPermutation([3, 2, 1]));
  console.log(nextPermutation([2, 1, 5, 4, 3, 0, 0]));
  