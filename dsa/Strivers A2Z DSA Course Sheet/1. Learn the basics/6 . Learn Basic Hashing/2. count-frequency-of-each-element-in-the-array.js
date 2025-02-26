function frequency(arr) {
  const map = {};
  arr.forEach((eachElement) => {
    map[eachElement] = (map[eachElement] || 0) + 1;
  });
  return map;
}

console.log(frequency([10, 5, 10, 15, 10, 5]));
