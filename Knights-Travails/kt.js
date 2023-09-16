function Node(pos, path) {
  return (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) ? null : { pos, path };
}

function knightMoves([posX, posY], [tarX, tarY]) {
  let q = [Node([posX, posY], [[posX, posY]])];
  let currentNode = q.shift();
  while (currentNode.pos[0] !== tarX || currentNode.pos[1] !== tarY) {
    let moves = [
      [currentNode.pos[0] + 2, currentNode.pos[1] - 1],
      [currentNode.pos[0] + 2, currentNode.pos[1] + 1],
      [currentNode.pos[0] - 2, currentNode.pos[1] - 1],
      [currentNode.pos[0] - 2, currentNode.pos[1] + 1],
      [currentNode.pos[0] + 1, currentNode.pos[1] - 2],
      [currentNode.pos[0] + 1, currentNode.pos[1] + 2],
      [currentNode.pos[0] - 1, currentNode.pos[1] - 2],
      [currentNode.pos[0] - 1, currentNode.pos[1] + 2],
    ];
    moves.forEach( move => {
      let node = Node(move, currentNode.path.concat([move]));
      if (node) q.push(node);
    });
    currentNode = q.shift();
  }
  console.log(`=> You made it in ${currentNode.path.length - 1} moves!  Here's your path:`);
  currentNode.path.forEach( pos => {
    console.log(pos);
  });
}

knightMoves([0, 0], [7, 7]);
knightMoves([0, 4], [4, 0]);
knightMoves([1, 1], [6, 6]);