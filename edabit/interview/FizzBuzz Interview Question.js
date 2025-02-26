function fizz_buzz(num) {
	return num % 3 == 0 && num % 5 == 0 ? 'FizzBuzz' : num % 3 == 0 ? 'Fizz' : num % 5 == 0 ? 'Buzz' : num;
}

console.log(fizz_buzz(3));
console.log(fizz_buzz(5));
console.log(fizz_buzz(15));
console.log(fizz_buzz(4));
