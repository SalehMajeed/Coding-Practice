function reverseNumber(num) {
  let result = 0;
  let remainder = 0;
  while (num >= 1) {
    const lastNum = num % 10;
    result = result * 10 + lastNum;
    num = parseInt(num / 10);
  }
  return result;
}

console.log(reverseNumber(123));
