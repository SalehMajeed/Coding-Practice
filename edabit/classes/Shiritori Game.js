class Shiritori {
	constructor() {
		this.words = [];
		this.game_over = false;
	}
	play(word) {
		let len;
		let last_word;
		let last_char;
		if (this.words.length > 0) {
			len = this.words.length - 1;
			last_word = this.words[len];
			last_char = last_word[last_word.length - 1];
		}
		if (!this.words.includes(word) && (this.words.length == 0 || last_char == word[0])) {
			this.words.push(word);
			return this.words;
		} else {
			this.game_over = true;
			return 'game over';
		}
	}
	restart() {
		this.words = [];
		this.game_over = false;
		return 'game restarted';
	}
}

const my_shiritori = new Shiritori();

console.log(my_shiritori.play('apple'));
console.log(my_shiritori.play('ear'));
console.log(my_shiritori.play('rhino'));
console.log(my_shiritori.play('corn'));

// Corn does not start with an "o".

console.log(my_shiritori.words);

// Words should be accessible.

console.log(my_shiritori.restart());
console.log(my_shiritori.words);

// Words array should be set back to empty.

console.log(my_shiritori.play('hostess'));
console.log(my_shiritori.play('stash'));
console.log(my_shiritori.play('hostess'));

// Words cannot have already been said.
