class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
  }

  setupBoard() {
    const $grid = $('<ul>');
    $grid.addClass("grid");
    $grid.addClass("group");

    this.appendSquares($grid);

    this.$el.append($grid);

    this.setupEvents();
  }

  setupEvents() {
    const view = this;

    $('.square').click( (event) => {
      const $square = $(event.currentTarget);
      const currentPos = $square.data("pos");
      if (this.game.playMove(currentPos)) {
        view.updateBoard();
      }
    });
  }

  updateBoard() {
    const $grid = $('.grid');
    const flattenedBoard = this.game.flattenedBoard();

    $grid.empty();
    this.appendSquares($grid);

    this.setupEvents();
  }

  appendSquares($grid) {
    for (let rowIdx = 0; rowIdx < 4; rowIdx++) {
      for (let colIdx = 0; colIdx < 4; colIdx++) {
        let $square = $('<li>');
        $square.addClass("square");
        $square.data("pos", [rowIdx, colIdx]);
        let element = this.game.getElement([rowIdx, colIdx]);
        $square.html(element);

        if (element === " ") {
          $square.addClass("space");
        } else {
          $square.addClass("number");
        }

        $grid.append($square);
      }
    }
  }
}

module.exports = View;
