function largestOddNumber(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] % 2 === 1) {
      return str.slice(0, i + 1);
    }
  }
  return "";
}

console.log(largestOddNumber("52"));
console.log(largestOddNumber("4206"));
console.log(largestOddNumber("35427"));
console.log(largestOddNumber("239537672423884969653287101"));
