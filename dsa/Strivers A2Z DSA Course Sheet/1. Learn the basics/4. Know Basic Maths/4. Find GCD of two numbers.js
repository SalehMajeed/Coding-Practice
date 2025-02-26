function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

console.log(gcd(4, 8));
console.log(gcd(3, 8));
console.log(gcd(3, 6));
