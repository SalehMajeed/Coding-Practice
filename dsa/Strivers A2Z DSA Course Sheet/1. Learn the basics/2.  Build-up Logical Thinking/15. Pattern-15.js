function pattern15(num) {
  let str = "";

  for (let i = num - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(65 + j);
    }
    str += "\n";
  }

  return str;
}

console.log(pattern15(5));
