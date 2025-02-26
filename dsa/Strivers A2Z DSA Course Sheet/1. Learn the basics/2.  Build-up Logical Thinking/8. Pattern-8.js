function pattern8(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < i; j++) {
      str += " ";
    }
    for (let j = 0; j < 2 * num - (i * 2 + 1); j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern8(5));
