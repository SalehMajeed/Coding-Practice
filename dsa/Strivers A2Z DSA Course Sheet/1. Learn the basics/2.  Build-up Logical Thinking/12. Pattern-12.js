function pattern12(num) {
  let str = "";

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }

    for (let j = 1; j <= 2 * (num - i); j++) {
      str += "#";
    }

      for (let j = i; j >= 1; j--) {
        str += j;
      }
    str += "\n";
  }

  return str;
}

console.log(pattern12(5));
