class Player {
	#hp;
	#maxHP;
	#en;
	#maxEn;
	constructor(name, health, energy, armor) {
		this.#hp = health;
		this.#maxHP = health;
		this.#en = energy;
		this.#maxEn = energy;
		this.armor = armor;
		this.name = name;
	}
	get hpPerc() {
		return ((100 * this.#hp) / this.#maxHP).toFixed(2);
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
		this.#hp = val < 0 ? 0 : val > this.#maxEn ? this.#maxEn : val;
	}
	learnSkill(name, stats) {
		this[name] = target => {
			if (stats.cost > this.#en) {
				return `${this.name} attempted to use ${name}, but didn't have enough energy!`;
			}

			this.en = this.#en - stats.cost;
			target.armor = target.armor - stats.penetration;

			const damage = stats.damage * ((100 - target.armor) / 100);
			target.hp = target.hp - damage;

			let attack_string = '';
			attack_string += `${this.name} used skill ${name}, ${stats.desc}, against ${
				target.name
			}, doing ${damage.toFixed(2)} damage!`;
			if (stats.heal) {
				attack_string += `${this.name} healed for ${stats.heal} health.`;
			}
			if (target.hp) {
				attack_string += `${target.name} is at ${target.hp.toFixed(2)} % health.`;
			} else {
				attack_string += `${target.name} died.`;
			}
			return attack_string;
		};
	}
}

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
