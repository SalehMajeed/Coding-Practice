function hoursPassed(t1, t2) {
	if (t1.slice(t1.length - 2) == 'AM' && t2.slice(t2.length - 2) == 'PM') {
		t1 = +t1.replace(/:.*/g, ' ');
		t2 = +t2.replace(/:.*/g, ' ');
		if (t1 < 12) {
			return t2 - t1 + 12 + ' hours';
		} else {
			return t2 - t1 + 24 + ' hours';
		}
	} else {
		const res = t2[0] - t1[0];
		return res ? res + ' hours' : 'no time passed';
	}
}

const [strVector, resVector] = [
	[
		['3:00 AM', '9:00 AM'],
		['2:00 PM', '4:00 PM'],
		['1:00 AM', '3:00 PM'],
		['2:00 AM', '3:00 PM'],
		['8:00 AM', '8:00 PM'],
		['12:00 AM', '10:00 PM'],
		['1:00 AM', '1:00 AM'],
		['12:00 PM', '12:00 PM'],
	],
	['6 hours', '2 hours', '14 hours', '13 hours', '12 hours', '22 hours', 'no time passed', 'no time passed'],
];
for (const i in strVector) console.log(hoursPassed(...strVector[i]), resVector[i]);
