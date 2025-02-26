class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		if (other.age > this.age) {
			return `${other.name} is older than me`;
		} else if (other.age < this.age) {
			return `${other.name} is younger than me`;
		} else {
			return `${other.name} is the same age as me`;
		}
	}
}

p1 = new Person('Samuel', 24);
p2 = new Person('Joel', 36);
p3 = new Person('Lily', 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));