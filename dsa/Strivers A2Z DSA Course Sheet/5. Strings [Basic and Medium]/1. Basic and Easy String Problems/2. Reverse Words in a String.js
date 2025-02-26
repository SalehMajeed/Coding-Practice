function reverseWords(str) {
  let tpmStr = "";
  let ansStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      tpmStr += str[i];
    } else if (str[i] === " ") {
      if (ansStr !== "") ansStr = `${tpmStr} ${ansStr}`;
      if (ansStr === "") ansStr = tpmStr;
      tpmStr = "";
    }
  }
  ansStr = `${tpmStr} ${ansStr}`;
  return ansStr;
}

console.log(reverseWords("this is an amazing program"));
console.log(reverseWords("This is decent"));
console.log(reverseWords(""));
console.log(reverseWords("Hello"));
console.log(reverseWords("  Hello     World  "));
console.log(reverseWords("HelloWorld"));
console.log(reverseWords("   Hello World   "));
console.log(reverseWords("Hello, World!"));
console.log(reverseWords("Hello        World"));

// 8. String with Leading and Trailing Spaces
console.log(reverseWords("    ")); // Output: ""