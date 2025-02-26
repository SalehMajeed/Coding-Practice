function sum(arr) {
	return (JSON.stringify(arr).match(/-?\d+/g) || []).reduce((acc, v) => (acc += +v), 0);
}

// console.log(sum(['1', 'five', '2wenty', 'thr33']));
// console.log(
// 	sum([
// 		['1X2', 't3n'],
// 		['1024', '5', '64'],
// 	])
// );
console.log(sum([[['1'], '10v3'], ['738h'], [['s0'], ['1mu4ch3'], '-1s0']]));
