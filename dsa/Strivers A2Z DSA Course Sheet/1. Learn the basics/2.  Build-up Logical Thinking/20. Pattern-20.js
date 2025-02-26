function pattern20(num) {
  let str = "";

  for (let i = 1; i <= num * 2 - 1; i++) {
    let starCondition = i;
    if (i > num) {
      starCondition = 2 * num - i;
    }
    let spaceCondition = (num - i) * 2 + 1;
    if (i > num) {
      spaceCondition = (i - num) * 2 + 1;
    }
    for (let j = 1; j <= starCondition; j++) {
      str += "*";
    }
    for (let j = 1; j < spaceCondition; j++) {
      str += " ";
    }

    for (let j = 1; j <= starCondition; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern20(3));
