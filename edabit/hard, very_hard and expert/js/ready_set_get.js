// You have to build a rudimentary architecture that will simulate a system of XP points distribution among two students that solve a series of given challenges on Edabit.

// Step 1: Build a class Challenge

// The constructor parameters are id and level. The id will be the numerical identifier of the challenge, and level will be a code made of two uppercased letters:

// "VE" = "Very Easy"
// "EA" = "Easy"
// "ME" = "Medium"
// "HA" = "Hard"
// "VH" = "Very Hard"
// "EX" = "Expert"
// Step 2: Build a method for class Challenge

// The name of the method inside class Challenge is points().

// The method must return the amount of points earned solving a challenge, based on the level of the challenge:

// VE = 5 XP
// EA = 10 XP
// ME= 20 XP
// HA= 40 XP
// VH = 80 XP
// EX = 120 XP
// Step 3: Build a class User

// The constructor parameters are name, xp and log. The name will be, trivially, the username. The xp is the accumulator that stores the XP points earned. The log is a sort of diary of the user: is an array that will store the id of the challenges solved by the user.

// Step 4: Build a method for the class User

// The name of the method to implement inside the class User is newSolvedChallenge() and as a parameter, it will accept an object of the Challenge class.

// The method must increment the xp of the user and store the challenge id into the array log.

// Step 5: Declare the instances needed for the tests

// Now that everything is ready, you have to set the exercise and declare the instances of the created classes, for sustaining the tests that are made. Start with the users declarations, they are two:

// user1 ➞ name = "Madam" | xp = 0 | log = []
// user2 ➞ name = "Steve" | xp = 0 | log = []
// Now, declare the challenges, they are six:

// challenge1 ➞ id = 1 | level = "VE";
// challenge2 ➞ id = 2 | level = "EA";
// challenge3 ➞ id = 3 | level = "ME";
// challenge4 ➞ id = 4 | level = "HA";
// challenge5 ➞ id = 5 | level = "VH";
// challenge6 ➞ id = 6 | level = "EX";
// Finally, you have to declare which are the challenges solved by the users, using the setter that you have implemented before:

// Madam solves the following challenges, in the order:

// challenge1 , challenge4 , challenge6
// Steve solves the,following challenges, in the order:

// challenge5 , challenge3, challenge2
// Step 6: The testing mechanics

// Tests will verify if after calling the properties and methods of the instance created by you, an expected result is returned. So, you don't have to return a result, but just being sure that everything is set according to Instructions.

// Examples
// user1.name ➞ "Madam"

// user2.xp ➞ 110
// // Steve has solved challenges 5, 3 and 2 (80 + 20 + 10 points)

// user1.log ➞ [1, 4, 6]
// // Remember to respect the order given in Instructions for to store data into the log

// challenge4.level ➞ "HA"

// challenge3.id ➞ 3

// challenge1.points ➞ 5

class Challenge {
	constructor(id, level) {
		this.id = id;
        this.level = level;
        this.points = this.points()
	}
	points() {
		const points_earned = {
			VE: 5,
			EA: 10,
			ME: 20,
			HA: 40,
			VH: 80,
			EX: 120,
		};
		return points_earned[this.level];
	}
}

class User {
	constructor(name, xp, log) {
		this.name = name;
		this.xp = xp;
		this.log = log;
	}
	new_solved_challenge(obj) {
		this.xp += obj.points;
		this.log.push(obj.id);
	}
}

let user1 = new User('Madam', 0, []);
let user2 = new User('Steve', 0, []);

let challenge1 = new Challenge(1, 'VE');
let challenge2 = new Challenge(2, 'EA');
let challenge3 = new Challenge(3, 'ME');
let challenge4 = new Challenge(4, 'HA');
let challenge5 = new Challenge(5, 'VH');
let challenge6 = new Challenge(6, 'EX');

user1.new_solved_challenge(challenge1);
user1.new_solved_challenge(challenge4);
user1.new_solved_challenge(challenge6);

user2.new_solved_challenge(challenge5);
user2.new_solved_challenge(challenge3);
user2.new_solved_challenge(challenge2);

console.log(challenge3.points);
