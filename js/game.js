const Board = require('./board');

class Game {
  constructor() {
    this.board = new Board();

    this.populateBoard();
  }

  playMove(currentPos) {
    const rowIdx = currentPos[0];
    const colIdx = currentPos[1];

    if (this.board.getElement([rowIdx - 1, colIdx]) === "space") {

    } else if (this.board.getElement([rowIdx + 1, colIdx]) === "space") {

    } else if (this.board.getElement([rowIdx, colIdx - 1]) === "space") {

    } else if (this.board.getElement([rowIdx, colIdx + 1]) === "space") {
      
    }
  }

  populateBoard() {
    this.board.populateGrid();
  }
}

module.exports = Game;
