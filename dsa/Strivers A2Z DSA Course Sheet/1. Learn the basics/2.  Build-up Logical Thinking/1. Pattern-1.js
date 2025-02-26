function pattern1(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern1(5));
