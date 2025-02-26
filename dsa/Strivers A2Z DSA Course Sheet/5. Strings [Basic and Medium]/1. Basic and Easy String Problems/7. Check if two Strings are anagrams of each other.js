function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    const strCount = {};
    for (const eachLetter of str1) {
      strCount[eachLetter] = (strCount[eachLetter] || 0) + 1;
    }
  
    for (const eachLetter of str2) {
      strCount[eachLetter] = (strCount[eachLetter] || -1) - 1;
    }
  
    return Object.values(strCount).reduce((acc, val) => (acc += val), 0) === 0;
  }
  
  console.log(isAnagram("CAT", "ACT"));
  console.log(isAnagram("RULES", "LESRT"));
  