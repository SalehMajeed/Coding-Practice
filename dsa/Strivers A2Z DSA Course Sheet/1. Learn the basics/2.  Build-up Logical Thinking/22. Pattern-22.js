function pattern22(num) {
  let str = "";

  for (let i = 0; i < num * 2 - 1; i++) {
    for (let j = 0; j < num * 2 - 1; j++) {
      str += num - Math.min(i, j, num * 2 - 2 - i, num * 2 - 2 - j);
    }
    str += "\n";
  }
  return str;
}

console.log(pattern22(3));
