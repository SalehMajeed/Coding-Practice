function acceptIntoMovie(age, parental_supervision) {
	return 15 <= age || parental_supervision;
}
console.log(acceptIntoMovie(14, true));
console.log(acceptIntoMovie(14, false));
console.log(acceptIntoMovie(16, false));
