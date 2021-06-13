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
			this.#en -= skill_statistics.cost;
			const damage = skill_statistics.damage * ((100 - arm) / 100);

			// setter for hp
			target.hp = (target.hp - damage).toFixed(2);

			// getter for hp
			this.hp += skill_statistics.heal || 0;
			return `${this.name} used ${name}, ${skill_statistics.desc}, against ${target.name}, doing ${damage.toFixed(
				2
			)} damage! ${this.name} healed for ${skill_statistics.heal} health! ${target.name} is at ${
				target.hp
			}% health`;
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

const alice = new Player('Alice', 110, 50, 10);
const bob = new Player('Bob', 100, 60, 20);

alice.learnSkill('fireball', {
	damage: 23,
	penetration: 1.2,
	heal: 5,
	cost: 15,
	desc: 'a firey magical attack',
});

console.log(alice.fireball(bob));
// Alice used fireball, a firey magical attack, against Bob, doing
// 18.68 damage! Alice healed for 5 health! Bob is at 81.32% health.

bob.learnSkill('superbeam', {
	damage: 200,
	penetration: 50,
	heal: 50,
	cost: 75,
	desc: 'an overpowered attack, pls nerf',
});

console.log(bob.superbeam(alice));
// Bob attempted to use superbeam, but didn't have enough energy!
