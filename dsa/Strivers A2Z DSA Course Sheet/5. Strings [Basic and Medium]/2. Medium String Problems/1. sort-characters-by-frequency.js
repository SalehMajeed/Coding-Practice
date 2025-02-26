function sortCharactersByFrequency(str) {
    const strMap = {};
    for (eachChar of str) {
      strMap[eachChar] = strMap[eachChar] + 1 || 1;
    }
  
    let newStr = "";
    const sortedKeys = Object.keys(strMap).sort((a, b) => strMap[b] - strMap[a]);
    for (eachChar of sortedKeys) {
      newStr += eachChar.repeat(strMap[eachChar]);
    }
    return newStr;
  }
  console.log(sortCharactersByFrequency("tree"));
  