function rps(p1, p2) {
	return p1 == p2
		? "it's a draw"
		: (p1 == 'Rock' && p2 == 'Scissors') || (p1 == 'Scissors' && p2 == 'Paper') || (p1 == 'Paper' && p2 == 'Rock')
		? 'The Winner is p1.'
		: 'The Winner is p2.';
}

console.log(rps('Rock', 'Paper'));
console.log(rps('Scissors', 'Paper'));
console.log(rps('Paper', 'Paper'));
