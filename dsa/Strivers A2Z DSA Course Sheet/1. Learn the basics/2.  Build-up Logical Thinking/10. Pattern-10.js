function pattern10(num) {
  let str = "";

  for (let i = 0; i < num * 2 - 1; i++) {
    let star = i;
    
    if (i > num) {
      star = 2 * num - i;
    }

    for (let j = 1; j <= star; j++) {
      str += "*";
    }
    str += "\n";
  }

  return str;
}

console.log(pattern10(5));
