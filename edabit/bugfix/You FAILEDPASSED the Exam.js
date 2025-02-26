function grade_percentage(userScore, passScore) {
	let s = 'You ';
	userScore = parseInt(userScore.substring(0, userScore.length - 1));
	passScore = parseInt(passScore.substring(0, passScore.length - 1));
	if (userScore < passScore) s = s + 'FAILED';
	if (userScore >= passScore) s = s + 'PASSED';
	return 'You' + ' ' + s + ' ' + 'the Exam';
}

console.log(grade_percentage('85%', '85%'));
console.log(grade_percentage('99%', '85%'));
console.log(grade_percentage('65%', '90%'));
