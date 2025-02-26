function pattern2(num) {
    let str = "";
    for (let i = 0; i < num; i++) {
      for (let j = 0; j <= i; j++) {
        str += "*";
      }
      str += "\n";
    }
    return str;
  }
  
  console.log(pattern2(5));
  