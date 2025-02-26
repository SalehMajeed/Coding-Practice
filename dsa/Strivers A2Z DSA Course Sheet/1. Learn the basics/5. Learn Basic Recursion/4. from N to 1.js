function fromNTo1(n) {
    if (n <= 0) return;
    console.log(n--);
    fromNTo1(n);
  }
  
  fromNTo1(4);
  