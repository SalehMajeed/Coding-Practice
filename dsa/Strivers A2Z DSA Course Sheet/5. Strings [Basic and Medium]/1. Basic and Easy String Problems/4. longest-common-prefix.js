function longestCommonPrefix(str) {
  let res = "";
  for (let i = 0; i < str[0].length; i++) {
    const currentLetter = str[0][i];
    if (str.every((eachStr) => eachStr[i] === currentLetter)) {
      res += currentLetter;
    } else {
      break;
    }
  }
  return res;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["cir", "car"]));
