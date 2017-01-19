class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("group");

    for (let rowIdx = 0; rowIdx < 4; rowIdx++) {
      for (let colIdx = 0; colIdx < 4; colIdx++) {
        let $li = $("<li>");
        $li.data("pos", [rowIdx, colIdx]);

        $ul.append($li);
      }
    }

    this.$el.append($ul);
  }
}

module.exports = View;
