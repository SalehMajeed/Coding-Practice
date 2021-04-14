function has_bugs(buggy_code) {
	if (buggy_code) {
		return 'sad days';
	} else {
		return "it's a good day";
	}
}
console.log(has_bugs(true));
console.log(has_bugs(false));
