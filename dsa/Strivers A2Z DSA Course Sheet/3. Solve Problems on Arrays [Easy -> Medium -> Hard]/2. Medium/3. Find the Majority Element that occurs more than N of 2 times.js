function countMajority(arr) {
    const half = parseInt((arr.length - 1) / 2);
  
    let cnt = 0;
    let ele = null;
    arr.forEach((eachEle) => {
      if (cnt === 0) {
        ele = eachEle;
      } else if (ele === eachEle) {
        cnt++;
      } else {
        cnt--;
      }
    });
  
    let finalCnt = 0;
    arr.forEach((eachEle) => {
      if (ele === eachEle) {
        finalCnt++;
      }
    });
  
    if (finalCnt > half) {
      return ele;
    }
  
    return -1;
  }
  
  console.log(countMajority([3,2,3]));
  console.log(countMajority([2, 2, 1, 1, 1, 2, 2]));
  console.log(countMajority([4,4,2,4,3,4,4,3,2,4]));
  