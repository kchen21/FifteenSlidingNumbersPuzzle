const Board = require('./board');

class Game {
  constructor() {
    this.board = new Board();

    this.populateBoard();
  }

  playMove(currentPos) {
    const rowIdx = currentPos[0];
    const colIdx = currentPos[1];
    const selectedEl = this.board.getElement(currentPos);

    if (this.board.getElement([rowIdx - 1, colIdx]) === "space") {
      this.board.setElement([rowIdx - 1, colIdx], selectedEl);
      this.board.setElement(currentPos, "space");
    } else if (this.board.getElement([rowIdx + 1, colIdx]) === "space") {
      this.board.setElement([rowIdx + 1, colIdx], selectedEl);
      this.board.setElement(currentPos, "space");
    } else if (this.board.getElement([rowIdx, colIdx - 1]) === "space") {
      this.board.setElement([rowIdx, colIdx - 1], selectedEl);
      this.board.setElement(currentPos, "space");
    } else if (this.board.getElement([rowIdx, colIdx + 1]) === "space") {
      this.board.setElement([rowIdx, colIdx + 1], selectedEl);
      this.board.setElement(currentPos, "space");
    }
  }

  populateBoard() {
    this.board.populateGrid();
  }
}

module.exports = Game;
