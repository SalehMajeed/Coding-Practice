function is_last_character_n(word) {
	return /n$/.test(word);
}

console.log(is_last_character_n('Aiden'));
console.log(is_last_character_n('Piet'));
console.log(is_last_character_n('Bert'));
console.log(is_last_character_n('Dean'));
