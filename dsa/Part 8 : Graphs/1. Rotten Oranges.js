function orangesRotting(grid) {
  const row = grid.length;
  const column = grid[0].length;
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const queue = [];
  let time = 0;
  let freshCount = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      const currentColumn = grid[i][j];
      if (currentColumn === 2) {
        queue.push([i, j, 0]);
      } else if (currentColumn === 1) {
        freshCount += 1;
      }
    }
  }

  while (queue.length > 0) {
    let [i, j, currentTime] = queue.shift();
    time = Math.max(time, currentTime);
    for (const [x, y] of direction) {
      const currentPositionI = i + x;
      const currentPositionJ = j + y;
      if (
        currentPositionI >= 0 &&
        currentPositionI < row &&
        currentPositionJ >= 0 &&
        currentPositionJ < column &&
        grid[currentPositionI][currentPositionJ] === 1
      ) {
        grid[currentPositionI][currentPositionJ] = 2;
        freshCount -= 1;
        queue.push([currentPositionI, currentPositionJ, currentTime + 1]);
      }
    }
  }
  return freshCount === 0 ? time : -1;
}

const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

console.log(orangesRotting(grid)); // 4
