function triplet(arr) {
  arr.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let k = arr.length - 1;
    if (i !== 0 && arr[i] === arr[i - 1]) continue;
    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k];
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        ans.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
        while (j < k && arr[j] === arr[j - 1]) j++;
        while (j < k && arr[k] === arr[k + 1]) k--;
      }
    }
  }
  return ans;
}
console.log(triplet([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(triplet([])); // []
console.log(triplet([0, 0, 0])); // [[0, 0, 0]]
