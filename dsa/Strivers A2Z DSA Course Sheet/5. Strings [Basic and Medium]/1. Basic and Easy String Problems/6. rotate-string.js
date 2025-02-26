function isSame(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  str1 += str1;

  return str1.includes(str2);
}

console.log(isSame("abcde", "cdeab"));
console.log(isSame("abcde", "abced"));
