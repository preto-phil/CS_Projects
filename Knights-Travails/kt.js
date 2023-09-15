
const gameBoard = () => {
  let chessBoard = [];
  let cell = 0;
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      chessBoard[cell] = [r, c];
      cell++;
    }
  }
}


function knightMoves(position, target) {

}