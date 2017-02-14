const SlidingPuzzleGame = require('./game.js');
const SlidingPuzzleView = require('./view.js');

$(document).ready( () => {
  const rootEl = $('.sliding-puzzle');
  const game = new SlidingPuzzleGame.createSolvablePuzzle();
  new SlidingPuzzleView(game, rootEl);
});
