function leaderboards(users) {
	return users.sort((a, b) => (a.score + a.reputation * 2 > b.score + b.reputation * 2 ? -1 : 1));
}

console.log(
	leaderboards([
		{ name: 'a', score: 100, reputation: 20 },
		{ name: 'b', score: 90, reputation: 40 },
		{ name: 'c', score: 115, reputation: 30 },
	])
);
