function maxDepth(str) {
   let currentDepth = 0;
   let maxDepth = 0;
   for (eachChar of str) {
     if (eachChar === "(") {
       currentDepth += 1;
       if (currentDepth > maxDepth) {
         maxDepth = currentDepth;
       }
     } else if (eachChar === ")") {
       currentDepth -= 1;
     }
   }
   return maxDepth;
 }
 
 console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
 console.log(maxDepth("(1)+((2))+(((3)))"));
 console.log(maxDepth("()(())((()()))"));
 