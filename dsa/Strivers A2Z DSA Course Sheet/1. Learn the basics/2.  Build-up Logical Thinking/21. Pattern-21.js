function pattern21(num) {
  let str = "";

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (i === 1 || i === num || j === 1 || j === num) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  return str;
}

console.log(pattern21(5));
