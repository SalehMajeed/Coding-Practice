function check_palindrome(str) {
	return str == str.split('').reverse().join('');
}

console.log(check_palindrome('mom'));
console.log(check_palindrome('scary'));
console.log(check_palindrome('reviver'));
console.log(check_palindrome('stressed'));
