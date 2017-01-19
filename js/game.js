const Board = require('./board');

class Game {
  constructor() {
    this.board = new Board();

    this.populateBoard();
  }

  playMove(currentPos) {
    const rowIdx = currentPos[0];
    const colIdx = currentPos[1];

    if (this.getElement([rowIdx - 1, colIdx]) === "space") {
      this.board.swapElements(currentPos, [rowIdx - 1, colIdx]);
    } else if (this.board.getElement([rowIdx + 1, colIdx]) === "space") {
      this.board.swapElements(currentPos, [rowIdx + 1, colIdx]);
    } else if (this.board.getElement([rowIdx, colIdx - 1]) === "space") {
      this.board.swapElements(currentPos, [rowIdx, colIdx - 1]);
    } else if (this.board.getElement([rowIdx, colIdx + 1]) === "space") {
      this.board.swapElements(currentPos, [rowIdx, colIdx + 1]);
    }
  }

  populateBoard() {
    this.board.populateGrid();
  }
}

module.exports = Game;
