function pattern5(num) {
    let str = "";
    for (let i = 1; i <= num; i++) {
      for (let j = num; j >= i; j--) {
        str += `*`;
      }
      str += "\n";
    }
    return str;
  }
  
  console.log(pattern5(5));
  