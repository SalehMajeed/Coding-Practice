function pow(base, exponent) {
    if (exponent < 1) {
      return 1;
    }
    return base * pow(base, exponent - 1);
  }
  
  console.log(pow(2.0, 10));
  console.log(pow(2.1, 3));
  