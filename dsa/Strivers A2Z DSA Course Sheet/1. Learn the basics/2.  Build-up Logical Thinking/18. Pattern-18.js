function pattern18(num) {
  let str = "";

  for (let i = 0; i < num; i++) {
    for (let j = i; j >= 0; j--) {
      str += String.fromCharCode(65 + num - j - 1);
    }
    str += "\n";
  }

  return str;
}

console.log(pattern18(5));
