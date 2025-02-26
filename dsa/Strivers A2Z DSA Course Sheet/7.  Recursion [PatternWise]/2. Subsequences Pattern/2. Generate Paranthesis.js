function generateParentheses(n, result = [], str = "", open = 0, close = 0) {
   if (str.length >= 2 * n) {
     result.push(str);
   }
 
   if (open < n) {
     generateParentheses(n, result, str + "(", open + 1, close);
   }
 
   if (close < open) {
     generateParentheses(n, result, str + ")", open, close + 1);
   }
 
   return result;
 }
 
 console.log(generateParentheses(3));
 