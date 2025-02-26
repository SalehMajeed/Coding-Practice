class Challenge {
	constructor(id, level) {
		this.id = id;
		this.level = level;
		this.point = {
			VE: 5,
			EA: 10,
			ME: 20,
			HA: 40,
			VH: 80,
			EX: 120,
		};
	}
	get points() {
		return this.point[this.level];
	}
}

class User {
	constructor(name, xp, log) {
		this.name = name;
		this.xp = xp;
		this.log = log;
	}
	newSolvedChallenge(obj) {
		this.xp += obj.points;
		this.log.push(obj.id);
	}
}

const user1 = new User('Madam', 0, []);
const user2 = new User('Steve', 0, []);

const challenge1 = new Challenge(1, 'VE');
const challenge2 = new Challenge(2, 'EA');
const challenge3 = new Challenge(3, 'ME');
const challenge4 = new Challenge(4, 'HA');
const challenge5 = new Challenge(5, 'VH');
const challenge6 = new Challenge(6, 'EX');

user1.newSolvedChallenge(challenge1);
user1.newSolvedChallenge(challenge4);
user1.newSolvedChallenge(challenge6);

user2.newSolvedChallenge(challenge5);
user2.newSolvedChallenge(challenge3);
user2.newSolvedChallenge(challenge2);

console.log(user1.name);
console.log(user2.xp);
console.log(user1.log);
console.log(challenge4.level);
console.log(challenge3.id);
console.log(challenge1.points);
