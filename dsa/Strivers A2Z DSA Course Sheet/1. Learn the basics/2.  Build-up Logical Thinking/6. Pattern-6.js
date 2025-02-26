function pattern6(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    for (let j = num; j >= i; j--) {
      str += `${num - j + 1}`;
    }
    str += "\n";
  }
  return str;
}

console.log(pattern6(5));
