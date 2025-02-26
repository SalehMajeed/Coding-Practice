function reArrange(arr) {
    const newArr = [];
    const negArr = [];
    const posArr = [];
  
    arr.forEach((eachEle) => {
      if (eachEle < 0) {
        negArr.push(eachEle);
      } else {
        posArr.push(eachEle);
      }
    });
  
    negArr.sort();
    posArr.sort();
  
    const len = negArr.length > posArr.length ? negArr.length : posArr.length;
    for (let i = 0; i < len; i++) {
        newArr[i * 2] = posArr[i];
        newArr[i * 2 + 1] = negArr[i];
    }
  
    return newArr;
  }
  
  console.log(reArrange([1, 2, -4, -5, -6]));
  