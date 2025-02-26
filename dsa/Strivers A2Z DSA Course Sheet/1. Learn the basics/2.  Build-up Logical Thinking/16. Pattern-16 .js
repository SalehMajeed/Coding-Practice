function pattern16(num) {
  let str = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(65 + i);
    }
    str += "\n";
  }

  return str;
}

console.log(pattern16(5));
