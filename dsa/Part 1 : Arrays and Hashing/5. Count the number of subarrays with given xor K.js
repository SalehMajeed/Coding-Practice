function subarraysWithXorK(a, k) {
  const length = a.length;
  let xor = 0;
  const map = {
    [xor]: 1,
  };
  let cnt = 0;
  for (let i = 0; i < length; i++) {
    xor = xor ^ a[i];
    const x = xor ^ k;
    cnt += map[x] || 0;
    map[xor] = (map[xor] || 0) + 1;
  }
  return cnt;
}
console.log(subarraysWithXorK([4, 2, 2, 6, 4], 6)); // 4
console.log(subarraysWithXorK([5, 6, 7, 8, 9], 5)); // 2
