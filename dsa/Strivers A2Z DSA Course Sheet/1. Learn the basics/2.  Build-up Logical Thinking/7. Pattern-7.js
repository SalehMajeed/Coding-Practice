function pattern7(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    for (let j = num; j >= i; j--) {
      str += " ";
    }
    for (let j = 1; j <= i * 2 - 1; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern7(5));
