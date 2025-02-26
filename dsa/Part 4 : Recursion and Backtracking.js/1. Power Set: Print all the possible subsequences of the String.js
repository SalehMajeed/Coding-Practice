function printset(str, index, subStr) {
  if (index === str.length) {
    console.log(subStr);
    return;
  }
  printset(str, index + 1, subStr + str[index]);
  printset(str, index + 1, subStr);
}

printset('abc', 0, '');
