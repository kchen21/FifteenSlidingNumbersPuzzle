class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.setupEvents();
  }

  setupBoard() {
    const $grid = $('<ul>');
    $grid.addClass("grid");
    $grid.addClass("group");

    this.appendSquares($grid);

    this.$el.append($grid);
  }

  setupEvents() {
    const view = this;

    $('.square').click( (event) => {
      const $square = event.currentTarget;
      const currentPos = $square.data("pos");
      this.game.playMove(currentPos);
      view.updateBoard();
    });
  }

  updateBoard() {
    const $grid = $('.grid');
    const flattenedBoard = this.game.flattenedBoard();

    $grid.empty();
    this.appendSquares($grid);
  }

  appendSquares($grid) {
    for (let rowIdx = 0; rowIdx < 4; rowIdx++) {
      for (let colIdx = 0; colIdx < 4; colIdx++) {
        let $square = $('<li>');
        $square.addClass("square");
        $square.data("pos", [rowIdx, colIdx]);
        $square.html(this.game.getElement([rowIdx, colIdx]));

        $grid.append($square);
      }
    }
  }
}

module.exports = View;
