class Twitter {
	#password = null;
	#tweets_array = [];
	constructor(user, pass) {
		this.user = user;
		this.#password = pass;
	}
	checkPassword(str) {
		return this.#password == str;
	}
	get password() {
		return '****';
	}
	set password(val) {}
	set tweet(str) {
		this.#tweets_array.push(str);
	}
	get tweets() {
		return [...this.#tweets_array];
	}
}

console.log('\n---GENERAL:---\n');
console.log('Did you actually create a Twitter class?');
console.log(typeof Twitter, 'function', `I can't seem to find your Twitter class!`);

const luke = new Twitter('luke', 'empireSucks');

console.log('\n----\nDoes your Twitter class have one and only one public property, "user"?');
console.log(Object.keys(luke), ['user'], `You have too few or too many publicly visible properties!`);

console.log('\n---PASSWORD:---\n');
console.log('\nDoes your Twitter class have a checkPassword method?');
console.log(typeof luke.checkPassword, 'function', `I can't find a checkPassword method!`);

console.log('\n----\nDoes it return "true" for the correct password?');
console.log(
	luke.checkPassword('empireSucks'),
	true,
	`Your password checker doesn't seem to work with the correct password!`
);

console.log('\n----\nDoes it return "false" for the wrong password?');
console.log(luke.checkPassword('palpatineIsMyHomie'), false, `Your password checker is too lenient!`);

console.log(`\n----\nI'm a malicious party, and I wanna see your password! Can I?`);
console.log(luke.password, '****', `Hey wait a minute! I shouldn't be able to see your password!`);

console.log(`\n----\nI see how it is. Well I'm just going to change your password!`);
luke.password = 'palpatineIsMyHomie';
console.log(
	luke.checkPassword('palpatineIsMyHomie') || !luke.checkPassword('empireSucks'),
	false,
	`I shouldn't be able to change your password!`
);
console.log('\n---TWEETS:---\n');
console.log(`\nDoes your Twitter class have a setter for "tweet" that does *not* write to a public property?`);
luke.tweet = 'use the force!';
console.log(luke);
console.log(Object.keys(luke).length == 1, true, `Your 'tweet' setter must not write to a publicly visible property.`);

console.log('\n----\nAdd another tweet:');
luke.tweet = 'I <3 my xwing';
console.log(
	luke.tweets,
	['use the force!', 'I <3 my xwing'],
	`Either your tweet setter isn't adding tweets correctly, or your tweets getter is not reading them correctly.`
);

console.log('\n----\nAnd why not one more, just for fun?');
luke.tweet = '#team solo';
console.log(
	luke.tweets,
	['use the force!', 'I <3 my xwing', '#team solo'],
	`Either your tweet setter isn't adding tweets correctly, or your tweets getter is not reading them correctly.`
);

console.log('\n----\nLast test: attempting to modify the internal tweets array should *not* work!');
luke.tweets.pop();
luke.tweets.push('This account has been commandeered by the Galactic Empire');
console.log(
	luke.tweets,
	['use the force!', 'I <3 my xwing', '#team solo'],
	`Your tweets getter should not allow direct modifcation of the tweets array.`
);
