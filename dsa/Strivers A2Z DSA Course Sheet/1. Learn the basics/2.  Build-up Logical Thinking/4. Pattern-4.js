function pattern4(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      str += `${i}`;
    }
    str += "\n";
  }
  return str;
}

console.log(pattern4(5));
