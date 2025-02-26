class Player {
	#hp;
	#maxHP;
	#en;
	#maxEn;
	constructor(name, health, energy, armor) {
		this.name = name;
		this.#hp = health;
		this.#maxHP = health;
		this.#en = energy;
		this.#maxEn = energy;
		this.armor = armor;
	}

	learnSkill(name, skill_statistics) {
		return (this[name] = target => {
			//Check energy
			if (skill_statistics.cost > this.#en) {
				return `${this.name} attempted to use ${name}, but didn't have enough energy!`;
			}
			const arm = target.armor - skill_statistics.penetration;
			target.armor = arm;
			this.en -= skill_statistics.cost;
			const damage = skill_statistics.damage * ((100 - arm) / 100);

			// setter for hp
			target.hp = (target.hp - damage).toFixed(2);

			// getter for hp
			this.hp += skill_statistics.heal || 0;
			let res = `${this.name} used ${name}, ${skill_statistics.desc}, against ${
				target.name
			}, doing ${damage.toFixed(2)} damage!`;
			if (skill_statistics.heal) {
				res += ` ${this.name} healed for ${skill_statistics.heal} health!`;
			}
			if (target.hp) {
				res += `${target.name} is at ${target.hp}% health`;
			} else {
				res += `${target.name} died.`;
			}
			return res;
		});
	}

	get hp() {
		return this.#hp;
	}
	get en() {
		return this.#en;
	}
	set hp(val) {
		this.#hp = val < 0 ? 0 : val > this.#maxHP ? this.#maxHP : val;
	}
	set en(val) {
		this.#en = val < 0 ? 0 : val > this.#maxEn ? this.#maxEn : val;
	}
	get hpPerc() {
		return ((100 * this.#hp) / this.#maxHP).toFixed(2);
	}
}

const new_alice = new Player('Alice', 110, 50, 10);
const new_bob = new Player('Bob', 100, 60, 20);

new_alice.learnSkill('fireball', {
	damage: 23,
	penetration: 1.2,
	heal: 5,
	cost: 15,
	desc: 'a firey magical attack',
});

console.log(new_alice.fireball(new_bob));
// Alice used fireball, a firey magical attack, against Bob, doing
// 18.68 damage! Alice healed for 5 health! Bob is at 81.32% health.

new_bob.learnSkill('superbeam', {
	damage: 200,
	penetration: 50,
	heal: 50,
	cost: 75,
	desc: 'an overpowered attack, pls nerf',
});

console.log(new_bob.superbeam(new_alice));
// Bob attempted to use superbeam, but didn't have enough energy!

console.log('----FIGHT!----');
//player class exists
const alice = new Player('Alice', 110, 50, 10);
const bob = new Player('Bob', 100, 60, 20);
console.log('Does our Player class exist?');
console.log(
	bob instanceof Player && alice instanceof Player,
	true,
	`Alice and Bob don't seem to be instances of the player class.`
);

//learn skill
console.log('\n----\nCan our competitors learn new skills?');
console.log(typeof alice.learnSkill, 'function', 'Missing `learnSkill` method!');

//skill is function
console.log('\n----\nDoes the learnSkill method allow us to add a skill?');
alice.learnSkill('fireball', {
	damage: 23,
	penetration: 1.2,
	heal: 0,
	cost: 15,
	desc: 'a firey magical attack',
});
console.log(typeof alice.fireball, 'function', 'Could not learn skill "Fireball"!');

//cast skill
console.log('\n----\nCan we cast our new skill?');

console.log(
	alice.fireball(bob),
	'Alice used fireball, a firey magical attack, against Bob, doing 18.68 damage! Bob is at 81.32% health.',
	'Using Fireball returned the wrong string!'
);

//too high energy cost?
console.log('\n----\nWhat about skills with too high an energy cost?');
bob.learnSkill('superbeam', {
	damage: 200,
	penetration: 50,
	heal: 50,
	cost: 75,
	desc: 'an overpowered attack, pls nerf',
});

console.log(
	bob.superbeam(alice),
	`Bob attempted to use superbeam, but didn't have enough energy!`,
	'Bob should return that he cannot use this skill!'
);

//can get a player's HP percent and energy
console.log("\n----\nAfter that devastating attack, let's check in on Alice and Bob:");
console.log(bob.hpPerc + '% health', '81.32% health', `Bob should be at 81.32% health`);
console.log(alice.en + ' energy', '35 energy', `Alice's energy should be 35.`);

//Combo attack
console.log("\n----\nBut wait! Bob's back in action!");
bob.learnSkill('Meteor Strike', {
	damage: 118,
	penetration: 4,
	heal: 5,
	cost: 20,
	desc: 'an attack that basically ends the game (gg)',
});

console.log(
	bob['Meteor Strike'](alice),
	'Bob used Meteor Strike, an attack that basically ends the game (gg), against Alice, doing 110.92 damage! Bob healed for 5 health! Alice died. '
);

console.log('\n----\nAre the four health and energy properties private?');
['hp', 'maxHp', 'en', 'maxEn'].forEach(prop => {
	console.log(bob['#' + prop], undefined, `Property #${prop} should not be publically accessible!`);
});
