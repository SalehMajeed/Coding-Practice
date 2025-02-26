function printNTimes(n) {
  if (n <= 0) return 0;
  console.log(n);
  n--;
  return printNTimes(n);
}

console.log(printNTimes(5));
