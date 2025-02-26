function romanToInt(str) {
  const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < str.length; i++) {
    const currentVal = romanObj[str[i]];
    const nextVal = romanObj[str[i + 1]];
    if (nextVal > currentVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }
  return total;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
