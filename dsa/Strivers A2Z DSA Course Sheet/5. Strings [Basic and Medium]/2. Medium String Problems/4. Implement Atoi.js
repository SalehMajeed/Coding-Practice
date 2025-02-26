function myAtoi(str) {
   let int = 0;
   let indx = 0;
   const maxInt = 2147483647;
   const minInt = -2147483648;
 
   str = str.trim();
   
   let sign = 1;
   if (str[indx] === '-' || str[indx] === '+') {
     sign = str[indx] === '-' ? -1 : 1;
     indx++;
   }
 
   while (indx < str.length && str[indx] >= "0" && str[indx] <= "9") {
     const currentNum = str[indx];
     int = 10 * int + 1 * currentNum;
     if (int * sign > maxInt) {
       return maxInt;
     }
     if (int * sign < minInt) {
       return minInt;
     }
     indx += 1;
   }
   return int * sign;
 }
 
 console.log(myAtoi("42"));
 console.log(myAtoi("-042"));
 console.log(myAtoi("  -042"));
 console.log(myAtoi("1337c0d3"));
 console.log(myAtoi("-91283472332"));
 