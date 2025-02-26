function generateBinaryStrings(n, str = "", result = []) {
   if (str.length >= n) {
     result.push(str);
     return result;
   }
   generateBinaryStrings(n, str + "0", result);
   generateBinaryStrings(n, str + "1", result);
   return result;
 }
 
 console.log(generateBinaryStrings(3));
 