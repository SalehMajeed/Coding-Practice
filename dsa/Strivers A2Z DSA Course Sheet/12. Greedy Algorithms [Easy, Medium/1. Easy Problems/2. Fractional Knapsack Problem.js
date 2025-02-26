function knapsackProblem(arr, w) {
  arr.sort((a, b) => a.weight - b.weight);
  let currentWeight = 0;
  let finalValue = 0;
  console.log(arr);
  arr.forEach((eachObj) => {
    const totalWeight = currentWeight + eachObj.weight;
    if (totalWeight <= w) {
      currentWeight += eachObj.weight;
      finalValue += eachObj.value;
    } else {
      const remain = w - currentWeight;
      finalValue += (eachObj.value / remain) * remain;
      currentWeight = w;
    }
  });

  return finalValue;
}

console.log(
  knapsackProblem(
    [
      { weight: 20, value: 100 },
      { weight: 10, value: 60 },
      { weight: 30, value: 120 },
    ],
    50
  )
);
