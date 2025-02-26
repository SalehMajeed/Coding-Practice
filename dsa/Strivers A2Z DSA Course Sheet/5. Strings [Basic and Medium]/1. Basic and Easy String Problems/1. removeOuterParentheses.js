function removeOuterParentheses(str) {
  let resultStr = "";
  let openResult = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      if (openResult > 0) {
        resultStr += str[i];
      }
      openResult += 1;
    } else if (str[i] === ")") {
      openResult -= 1;
      if (openResult > 0) {
        resultStr += str[i];
      }
    }
  }
  return resultStr;
}

console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()"));
