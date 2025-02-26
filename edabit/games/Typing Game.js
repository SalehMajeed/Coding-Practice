function correctStream(user, correct) {
	return user.map((val, index) => (val == correct[index] ? 1 : -1));
}

console.log(correctStream(['it', 'is', 'find'], ['it', 'is', 'fine']), [1, 1, -1]);
console.log(
	correctStream(['april', 'showrs', 'bring', 'may', 'flowers'], ['april', 'showers', 'bring', 'may', 'flowers']),
	[1, -1, 1, 1, 1]
);
console.log(correctStream(['weird', 'indicr', 'moment'], ['weird', 'indict', 'moment']), [1, -1, 1]);
console.log(correctStream(['starry', 'wind', 'skies'], ['starry', 'wind', 'skies']), [1, 1, 1]);
