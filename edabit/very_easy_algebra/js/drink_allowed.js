function shouldServeDrinks(older, at_break) {
	return 18 <= older && !at_break;
}
console.log(shouldServeDrinks(17, true));
console.log(shouldServeDrinks(19, false));
console.log(shouldServeDrinks(30, true));
