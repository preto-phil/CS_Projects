
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


function validMove(r, c) {
  return (r < 8 && r >= 0 && c < 8 && c >= 0 ) ? true : false;
}

function knightMoves(position, target) {

}