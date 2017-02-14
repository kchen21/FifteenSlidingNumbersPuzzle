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

  isSolvable() {
    const rowIdxOfSpace = this.board.locationOfSpace[0];

    if (rowIdxOfSpace % 2 === 0 && this.numOfInversions() % 2 === 0) {
      return false;
    }

    if (rowIdxOfSpace % 2 === 1 && this.numOfInversions() % 2 === 1) {
      return false;
    }

    return true;
  }

  numOfInversions() {
    const flattenedBoard = this.flattenedBoard();
    let inversionCount = 0;

    for (let i = 0; i < flattenedBoard.length; i++) {
      for (let j = i + 1; j < flattenedBoard.length; j++) {
        if (flattenedBoard[i] > flattenedBoard[j]) {
          inversionCount += 1;
        }
      }
    }

    return inversionCount;
  }
}

module.exports = Game;
