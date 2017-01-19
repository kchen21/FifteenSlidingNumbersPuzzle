const Board = require('./board');

class Game {
  constructor() {
    this.board = new Board();

    this.populateBoard();
  }

  playMove(currentPos) {
    const rowIdx = currentPos[0];
    const colIdx = currentPos[1];

    if (this.board.getElement([rowIdx - 1, colIdx]) === " ") {
      this.board.swapElements(currentPos, [rowIdx - 1, colIdx]);
    } else if (this.board.getElement([rowIdx + 1, colIdx]) === " ") {
      this.board.swapElements(currentPos, [rowIdx + 1, colIdx]);
    } else if (this.board.getElement([rowIdx, colIdx - 1]) === " ") {
      this.board.swapElements(currentPos, [rowIdx, colIdx - 1]);
    } else if (this.board.getElement([rowIdx, colIdx + 1]) === " ") {
      this.board.swapElements(currentPos, [rowIdx, colIdx + 1]);
    }
  }

  getElement(pos) {
    return this.board.getElement(pos);
  }

  populateBoard() {
    this.board.populateGrid();
  }
}

module.exports = Game;
