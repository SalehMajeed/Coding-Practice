function isGood(n, d) {
    let lastDigit = n % 10;
    let sum = lastDigit;
  
    if (lastDigit === d) {
      return false;
    }
  
    n = parseInt(n / 10);
    while (n > 0) {
      lastDigit = n % 10;
      if (lastDigit === d || lastDigit <= sum) {
        return false;
      } else {
        sum += lastDigit;
        n = parseInt(n / 10);
      }
    }
    return true;
  }
  
  function goodNumber(l, r, d, result = []) {
    if (l > r) {
      return result;
    }
  
    if (isGood(l, d)) {
      result.push(l);
    }
    return goodNumber(l + 1, r, d, result);
  }
  
  console.log(goodNumber(410, 520, 3));
  console.log(goodNumber(840, 850, 6));
  