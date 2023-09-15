class Cell {
  constructor(x, y, distance) {
    this.x = x;
    this.y = y;
    this.distance = distance;
  }
}

function validMove(x, y) {
  return (x < 8 && x >= 0 && y < 8 && y >= 0 ) ? true : false;
}

function knightMoves(position, target) {

  // Different move combinations
  let dx = [-2, -1, 1, 2, -2, -1, 1, 2];
  let dy = [-1, -2, -2, -1, 1, 2, 2, 1];

  let q = [];
  // Starting position of knight
  q.push(new Cell(knightPos[0], knightPos[1], 0));

}