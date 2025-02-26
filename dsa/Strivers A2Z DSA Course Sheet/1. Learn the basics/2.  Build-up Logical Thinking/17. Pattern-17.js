function pattern17(num) {
  let str = "";

  for (let i = 1; i <= num; i++) {
    for(let k = i; k <= num; k++) {
      str += " ";
    }
    const condition = 2 * i - 1;
    for (let j = 0; j < condition; j++) {
      if (j < condition / 2) {
        str += String.fromCharCode(65 + j);
      } else {
        str += String.fromCharCode(65 + condition - j - 1);
      }
    }
    str += "\n";
  }

  return str;
}

console.log(pattern17(5));
