class Shiritori {
	constructor() {
		this.words = [];
		this.game_over = false;
		this.previous_word = '';
	}
	play(word) {
		if (this.words.length == 0) {
			this.words.push(word);
			this.previous_word = this.words[this.words.length - 1].split('').pop();
			return this.words;
		}
		if (!this.words.includes(word) && this.previous_word == word[0] && this.game_over == false) {
			this.words.push(word);
			this.previous_word = this.words[this.words.length - 1].split('').pop();
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

my_shiritori = new Shiritori();

console.log(my_shiritori.play('apple')); //➞ ["apple"]
console.log(my_shiritori.play('ear')); //➞ ["apple", "ear"]
console.log(my_shiritori.play('rhino')); //➞ ["apple", "ear", "rhino"]
console.log(my_shiritori.play('corn')); //➞ "game over"

// Corn does not start with an "o".

console.log(my_shiritori.words); //➞  ["apple", "ear", "rhino"]

// Words should be accessible.

console.log(my_shiritori.restart()); //➞ "game restarted"
console.log(my_shiritori.words); //➞ []

// Words array should be set back to empty.

console.log(my_shiritori.play('hostess')); //➞ ["hostess"]
console.log(my_shiritori.play('stash')); //➞ ["hostess", "stash"]
console.log(my_shiritori.play('hostess')); //➞ "game over"

// Words cannot have already been said.
