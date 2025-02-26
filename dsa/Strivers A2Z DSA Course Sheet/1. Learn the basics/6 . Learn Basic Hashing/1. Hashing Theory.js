function charCount(str, compairedStr) {
  const map = {};
  for (const char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  return map;
}

console.log(charCount("abcdabehf"));
