// Creates an Adjacency List where each square can jump to

const knightMoves = [
  [2, -1],
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
];

const gameBoard = [];
for (let row = 0; row < 8; row++) {
  const rowOfMoves = [];
  for (let col = 0; col < 8; col++) {
    const possibleMoves = [];
    for (let move of knightMoves) {
      if (
        0 <= row + move[0] &&
        row + move[0] <= 7 &&
        0 <= col + move[1] &&
        col + move[1] <= 7
      ) {
        possibleMoves.push([row + move[0], col + move[1]]);
      }
    }
    rowOfMoves.push(possibleMoves);
  }
  gameBoard.push(rowOfMoves);
}

export { gameBoard };
