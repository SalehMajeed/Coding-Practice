function in_box(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (
			arr[0].includes('*') ||
			arr[arr.length - 1].includes('*') ||
			arr[i][0].includes('*') ||
			arr[i][arr[i].length - 1].includes('*')
		) {
			return false;
		} else if (arr[i].includes('*')) {
			return true;
		}
	}
	return false;
}

console.log(in_box(['###', '#*#', '###']));
console.log(in_box(['####', '#* #', '#  #', '####']));
console.log(in_box(['*####', '# #', '#  #*', '####']));
console.log(in_box(['#####', '#   #', '#   #', '#   #', '#####']));
