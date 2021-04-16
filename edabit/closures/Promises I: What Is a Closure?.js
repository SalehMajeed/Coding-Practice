const greetingMaker = salutation => name => salutation + ', ' + name;

const greeting = greetingMaker('Hello');
console.log(greeting('James'));
