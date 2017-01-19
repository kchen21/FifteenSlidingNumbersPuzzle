class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
  }

  setupBoard() {
    const $grid = $('<ul>');
    $grid.addClass("group");

    for (let rowIdx = 0; rowIdx < 4; rowIdx++) {
      for (let colIdx = 0; colIdx < 4; colIdx++) {
        let $square = $('<li>');
        $square.addClass("square");
        $square.data("pos", [rowIdx, colIdx]);
        $square.html(this.game.getElement([rowIdx, colIdx]));

        $grid.append($square);
      }
    }

    this.$el.append($grid);
  }

  setupEvents() {
    const view = this;

    $('.square').click( (event) => {
      const $square = event.currentTarget;
      this.game.playMove($square.data("pos"));
      view.updateBoard();
    });
  }

  updateBoard() {}
}

module.exports = View;
