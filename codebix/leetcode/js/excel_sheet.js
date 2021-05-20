function excel_sheet(str) {
	let total = 0;
    for (let i = 0; i < str.length; i++) {
		total += 26 ** (str.length - (i + 1)) * (str.charCodeAt(i) - 64);
	}
	return total;
}

console.log(excel_sheet('A'));
console.log(excel_sheet('AZ'));
console.log(excel_sheet('ZA'));
console.log(excel_sheet('ZZ'));
console.log(excel_sheet('ZZA'));
console.log(excel_sheet('ZZZ'));
