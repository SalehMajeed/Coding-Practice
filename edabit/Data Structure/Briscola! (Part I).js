const points = {
	A: 11,
	3: 10,
	K: 4,
	Q: 3,
	J: 2,
};

function briscolaScore(myDeck1, myDeck2) {
	let total_score = 0;
	total_score += myDeck1.reduce((acc, val) => (acc += typeof points[val[0]] == 'number' ? points[val[0]] : 0), 0);
    total_score += myDeck2.reduce((acc, val) => (acc += typeof points[val[0]] == 'number' ? points[val[0]] : 0), 0);
	return total_score > 120 ? ' You Win!' : total_score < 120 ? 'You Lose!' : 'Draw!';
}

console.log(
	briscolaScore(
		['3c', '3s', 'Qd', 'Jh', '5d', 'Jc', '6d', 'Ad', 'Js', 'Qc'],
		['Jd', 'Kd', '4c', '6s', 'Ks', '5c', '3d', 'As', 'Jh', '6h']
	)
);
console.log(briscolaScore(['Ac', 'As', '3d', '3h', '3s', 'Ah', 'Kd'], ['3d', 'Ad', 'Ac', 'As', 'Ah']));
console.log(briscolaScore(['Ac', 'As', '3d', '3h', '3s', 'Ah', 'Kd'], ['3d', 'Ad', 'Ac', 'As', '3h']));
