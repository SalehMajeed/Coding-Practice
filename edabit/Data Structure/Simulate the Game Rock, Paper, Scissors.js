function rps(p1, p2) {
	return p1 == p2
		? 'TIE'
		: (p1 == 'rock' && p2 == 'scissors') || (p1 == 'scissors' && p2 == 'paper') || (p1 == 'paper' && p2 == 'rock')
		? 'Player 1 Wins.'
		: 'Player 2 Wins.';
}

console.log(rps('rock', 'paper'));
console.log(rps('paper', 'rock'));
console.log(rps('paper', 'scissors'));
console.log(rps('scissors', 'scissors'));
console.log(rps('scissors', 'paper'));
