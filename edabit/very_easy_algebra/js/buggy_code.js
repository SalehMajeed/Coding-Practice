function has_bugs(buggy_code) {
	return buggy_code ? 'sad days' : "it's a good day";
}
console.log(has_bugs(true));
console.log(has_bugs(false));
