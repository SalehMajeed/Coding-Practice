function roman_to_int(string) {
	let number = 0;
	for (let i = 0; i < string.length; i++) {
		switch (string[i]) {
			case 'I':
				number++;
				break;
			case 'V':
				if (string[i - 1] == 'I') number += 3;
				else number += 5;
				break;
			case 'X':
				if (string[i - 1] == 'I') number += 8;
				else number += 10;
				break;
			case 'L':
				if (string[i - 1] == 'X') number += 30;
				else number += 50;
				break;
			case 'C':
				if (string[i - 1] == 'X') number += 80;
				else number += 100;
				break;
			case 'D':
				if (string[i - 1] == 'C') number += 300;
				else number += 500;
				break;
			case 'M':
				if (string[i - 1] == 'C') number += 800;
				else number += 1000;
				break;
		}
	}
	return number;
}
console.log(roman_to_int('III'));
console.log(roman_to_int('IV'));
console.log(roman_to_int('IX'));
console.log(roman_to_int('LVIII'));
console.log(roman_to_int('MCMXCIV'));

/**
 *      Symbol          Value
 *       I                1
 *       V                5
 *       X                10
 *       L                50
 *       C                100
 *       D                500
 *       M                1000
 */
