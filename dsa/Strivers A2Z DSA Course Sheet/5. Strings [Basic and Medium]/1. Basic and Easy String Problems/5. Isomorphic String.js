function isIsomorphic(str1, str2) {
    if (str1.length !== str2.length) return false;
  
    const strMap = new Map();
  
    for (let i = 0; i < str1.length; i++) {
      const s1 = str1[i];
      const s2 = str2[i];
  
      // console.log(s1, strMap.get(s1), s2);
      if (strMap.has(s1)) {
        if (strMap.get(s1) !== s2) {
          return false;
        }
      } else {
        strMap.set(s1, s2);
      }
    }
  
    return true;
  }
  
  console.log(isIsomorphic("egg", "add")); // Output: true
  console.log(isIsomorphic("foo", "bar")); // Output: false
  console.log(isIsomorphic("paper", "title")); // Output: true
  console.log(isIsomorphic("ab", "aa")); // Output: false (Different lengths)
  console.log(isIsomorphic("ab", "ca")); // Output: true
  