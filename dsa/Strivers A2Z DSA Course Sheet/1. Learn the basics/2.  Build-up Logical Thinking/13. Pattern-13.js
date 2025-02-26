function pattern13(num) {
  let str = "";

  for (let i = 1, k = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++, k++) {
      str += k;
    }
    str += "\n";
  }

  return str;
}

console.log(pattern13(5));
