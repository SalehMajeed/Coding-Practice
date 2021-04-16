const makePlusFunction = baseNum => num => baseNum + num;

const plusFive = makePlusFunction(5);
console.log(plusFive(2));
console.log(plusFive(-8));

const plusTen = makePlusFunction(10);
console.log(plusTen(0));
console.log(plusTen(188));
console.log(plusFive(plusTen(0)));
