function sumOfN(n, sum = 0) {
    if (n <= 0) return sum;
    sum += n--;
  
    return sumOfN(n, sum);
  }
  
  function sumOfN2(n) {
      if (n <= 0) return 0;
      // return  sumOfN2(n-1) + n--;
      return  n-- + sumOfN2(n);
  }
  
  
  // console.log(sumOfN(5));
  console.log(sumOfN2(5));