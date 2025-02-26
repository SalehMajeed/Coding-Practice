function atoi(str, i = 0, sign = 1, result = 0) {
    if (i > str.length - 1) {
      return sign * result;
    }
    switch (str[i]) {
      case "+":
        return atoi(str, i + 1, sign, result);
      case "-":
        return atoi(str, i + 1, -sign, result);
      case ".":
        return sign * result;
    }
  
    const digit = parseInt(str[i]);
  
    if (Number.isNaN(digit)) {
      return sign * result;
    }
  
    result = result * 10 + digit;
  
    return atoi(str, i + 1, sign, result);
  }
  
  console.log(atoi("123"));
  console.log(atoi("-456"));
  console.log(atoi("+789"));
  console.log(atoi(""));
  console.log(atoi("abc"));
  console.log(atoi("0032"));
  console.log(atoi("45rohit12"));
  console.log(atoi("-546+er"));
  console.log(atoi("-ban23"));
  console.log(atoi("-1.1"));
  