function getDays(date1, date2) {
	const one_day = 1000 * 60 * 60 * 24;
	return Math.round(Math.abs(date1 - date2) / one_day);
}

console.log(getDays(new Date('June 14, 2019'), new Date('June 20, 2019')), 6);
console.log(getDays(new Date('December 29, 2018'), new Date('January 1, 2019')), 3);
console.log(getDays(new Date('July 20, 2019'), new Date('July 30, 2019')), 10);
