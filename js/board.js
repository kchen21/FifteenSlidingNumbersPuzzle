class Board {
  constructor() {
    this.grid = Board.makeGrid();
  }

  static makeGrid() {
    const grid = [];

    for (let rowIdx = 0; rowIdx < 4; rowIdx++) {
      grid.push([]);
      for (let colIdx = 0; colIdx < 4; colIdx++) {
        grid[rowIdx].push(null);
      }
    }

    return grid;
  }
}

module.exports = Board;
