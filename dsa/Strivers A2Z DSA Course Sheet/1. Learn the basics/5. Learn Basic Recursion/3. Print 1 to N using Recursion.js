function oneToN(i, n) {
    if (i > n) {
      return;
    }
    console.log(i++);
    oneToN(i, n);
  }
  
  const n = 40;
  oneToN(1, n);
  