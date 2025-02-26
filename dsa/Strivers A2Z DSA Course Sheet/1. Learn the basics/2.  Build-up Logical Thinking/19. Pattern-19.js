function pattern19(num) {
  let str = "";

  for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      str += "*";
    }

    for (let j = 0; j < (2 * i) -1; j++) {
      str += " ";
    }

    for (let j = i; j <= num; j++) {
      str += "*";
    }
    str += "\n";
  }

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }

    for (let j = (2 * (num - i)); j >= 0; j--) {
      str += " ";
    }

    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }

  return str;
}

console.log(pattern19(6));
