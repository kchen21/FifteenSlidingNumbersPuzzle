const Board = require('./board');

class Game {
  constructor() {
    this.board = new Board();

    this.populateBoard();
  }

  playMove(currentPos) {
    const rowIdx = currentPos[0];
    const colIdx = currentPos[1];
    let newPos;

    if (this.board.getElement([rowIdx - 1, colIdx]) === " ") {
      newPos = [rowIdx - 1, colIdx];
    } else if (this.board.getElement([rowIdx + 1, colIdx]) === " ") {
      newPos = [rowIdx + 1, colIdx];
    } else if (this.board.getElement([rowIdx, colIdx - 1]) === " ") {
      newPos = [rowIdx, colIdx - 1];
    } else if (this.board.getElement([rowIdx, colIdx + 1]) === " ") {
      newPos = [rowIdx, colIdx + 1];
    }

    if (newPos) {
      this.board.swapElements(currentPos, newPos);
      return newPos;
    }
  }

  getElement(pos) {
    return this.board.getElement(pos);
  }

  flattenedBoard() {
    return this.board.flatten();
  }

  populateBoard() {
    this.board.populateGrid();
  }
}

module.exports = Game;
