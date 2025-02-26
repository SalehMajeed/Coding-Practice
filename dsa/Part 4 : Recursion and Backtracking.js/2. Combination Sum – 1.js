function combinationSum(numbers, target) {
  const result = [];

  function backtrack(index, combination, currentSum) {
    if (currentSum === target) {
      result.push([...combination]);
      return;
    }
    if (index === numbers.length || currentSum > target) {
      return;
    }
    combination.push(numbers[index]);
    backtrack(index, combination, currentSum + numbers[index]);
    combination.pop();
    backtrack(index + 1, combination, currentSum);
  }

  backtrack(0, [], 0);
  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));
