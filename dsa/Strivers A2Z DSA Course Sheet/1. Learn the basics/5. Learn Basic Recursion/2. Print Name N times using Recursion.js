const input = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question(`enter n time recursion ?`, (number) => {
  console.log(number);
  nTimesRecursion(number);
  input.close();
});

function nTimesRecursion(userValue, init = 1) {
  if (init > userValue) return;
  console.log(init++);
  nTimesRecursion(userValue, init);
}
