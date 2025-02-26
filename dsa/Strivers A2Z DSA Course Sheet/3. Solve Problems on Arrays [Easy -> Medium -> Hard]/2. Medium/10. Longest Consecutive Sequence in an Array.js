function longestSequence(arr) {
    let len = 1;
    let st = new Set();
  
    arr.forEach((eacEle) => {
      st.add(eacEle);
    });
  
    st.forEach((eachEle) => {
      if (!st.has(eachEle - 1)) {
        let count = 1;
        while (st.has(eachEle + 1)) {
          eachEle += 1;
          count += 1;
        }
        len = Math.max(len, count);
      }
    });
    return len;
  }
  
  console.log(longestSequence([100, 200, 1, 3, 2, 4]));
  console.log(longestSequence([3, 8, 5, 7, 6]));
  