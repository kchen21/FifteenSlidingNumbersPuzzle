class Board {
  constructor() {
    this.grid = Board.makeGrid();
  }

  populateGrid() {
    const gridElements = ["space"];

    for (let i = 1; i <= 15; i++) {
      gridElements.push(i.toString());
    }

    Board.shuffle(gridElements);

    for (let rowIdx = 0; rowIdx < 4; rowIdx++) {
      for (let colIdx = 0; colIdx < 4; colIdx++) {
        this.grid[rowIdx][colIdx] = gridElements.pop();
      }
    }
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

  static shuffle(arr) {
    for (let i = arr.length; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      [arr[i - 1], arr[j]] = [arr[j], arr[i -1]];
    }
  }
}

module.exports = Board;
