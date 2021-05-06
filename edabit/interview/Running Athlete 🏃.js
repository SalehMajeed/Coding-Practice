function running_athlete(act, txt) {
	let result = '';
	for (let i = 0; i < act.length; i++) {
		if (act[i] == 'run' && txt[i] != '_') {
			result += '/';
		} else if (act[i] == 'jump' && txt[i] != '|') {
			result += 'x';
		} else {
			result += txt[i];
		}
	}
	return result;
}

console.log(running_athlete(['run', 'jump', 'run', 'jump', 'run'], '_|_|_'));
console.log(running_athlete(['run', 'jump', 'run', 'run', 'run'], '_|_|_'));
console.log(running_athlete(['jump', 'jump', 'jump', 'jump', 'jump'], '_|_|_'));
console.log(running_athlete(['run', 'run', 'run', 'run', 'run'], '_|_|_'));
