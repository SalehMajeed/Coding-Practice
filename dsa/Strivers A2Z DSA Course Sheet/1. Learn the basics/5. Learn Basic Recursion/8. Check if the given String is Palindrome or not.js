function isPalindrome(str, i = 0) {
    if (i >= parseInt(str.length / 2)) return true;
    if (str[i] !== str[str.length - 1 - i]) return false;
    return isPalindrome(str, i + 1);
  }
  
  console.log(isPalindrome("sas"));
  console.log(isPalindrome("asa"));
  console.log(isPalindrome("palindrome"));
  