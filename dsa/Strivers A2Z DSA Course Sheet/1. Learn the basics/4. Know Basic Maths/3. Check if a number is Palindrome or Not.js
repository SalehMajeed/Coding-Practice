function reverseNumber(num) {
  let result = 0;
  let remainder = 0;
  while (num >= 1) {
    remainder = num % 10;
    result = result * 10 + remainder;
    num = parseInt(num / 10);
  }
  return result;
}

function checkPalindrome(num) {
  return num === reverseNumber(num);
}

console.log(checkPalindrome(123));
console.log(checkPalindrome(121));
