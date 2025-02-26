function printSubset(str, tempStr = "", i = 0, result = []) {
   if (i >= str.length) {
     result.push(tempStr);
     return;
   }
   printSubset(str, tempStr + str[i], i + 1, result);
   printSubset(str, tempStr, i + 1, result);
   return result;
 }
 
 console.log(printSubset(["a", "b", "c"]));
 console.log(printSubset([1, 2, 3]));
 