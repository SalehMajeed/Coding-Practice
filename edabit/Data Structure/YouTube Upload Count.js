function upload_count(dates, month) {
	let count = 0;
	for (const val of dates) {
		if (val.indexOf(month) == 0) {
			count++;
		}
	}
	return count;
}

console.log(upload_count(['Sept 22', 'Sept 21', 'Oct 15'], 'Sept'));

console.log(upload_count(['Sept 22', 'Sept 21', 'Oct 15'], 'Oct'));
