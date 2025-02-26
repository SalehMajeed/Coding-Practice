function isArmstrong(num) {
  let realNum = num;
  let numLen = 0;
  let tmp = num;
  while (tmp >= 1) {
    numLen += 1;
    tmp = parseInt(tmp / 10);
  }
  let sum = 0;
  while (num >= 1) {
    sum += (num % 10) ** numLen;
    num = parseInt(num / 10);
  }
  return sum === realNum;
}
console.log(isArmstrong(153));
console.log(isArmstrong(170));
