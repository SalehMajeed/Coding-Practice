function isSafe(board, row, col, N) {
  // Check if there is a queen in the same column
  for (let i = 0; i < row; i++) {
    if (board[i][col] === 1) {
      return false;
    }
  }

  // Check upper diagonal on left side
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 1) {
      return false;
    }
  }

  // Check upper diagonal on right side
  for (let i = row, j = col; i >= 0 && j < N; i--, j++) {
    if (board[i][j] === 1) {
      return false;
    }
  }

  return true;
}

function solve(board, solutions, n, row) {
  if (row === n) {
    const ans = board.map((eachRow) => eachRow.join(''));
    solutions.push(ans);
    return;
  }

  for (let col = 0; col < n; col++) {
    if (isSafe(board, row, col, n)) {
      board[row][col] = 1;
      solve(board, solutions, n, row + 1);
      board[row][col] = 0;
    }
  }
}

function solveQueen(n) {
  const board = Array.from({ length: n }, () => Array(n).fill('0'));
  const solutions = [];
  solve(board, solutions, n, 0);
  return solutions;
}

const n = 4;
const ans = solveQueen(n);
ans.forEach((solution) => {
  solution.forEach((row) => {
    console.log(row);
  });
});
