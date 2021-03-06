/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var SlidingPuzzleGame = __webpack_require__(1);
	var SlidingPuzzleView = __webpack_require__(3);
	
	$(document).ready(function () {
	  var rootEl = $('.sliding-puzzle');
	  var game = new SlidingPuzzleGame.createSolvablePuzzle();
	  new SlidingPuzzleView(game, rootEl);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Board = __webpack_require__(2);
	
	var Game = function () {
	  function Game() {
	    _classCallCheck(this, Game);
	
	    this.board = new Board();
	
	    this.populateBoard();
	  }
	
	  _createClass(Game, [{
	    key: "playMove",
	    value: function playMove(currentPos) {
	      var rowIdx = currentPos[0];
	      var colIdx = currentPos[1];
	      var newPos = void 0;
	
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
	  }, {
	    key: "getElement",
	    value: function getElement(pos) {
	      return this.board.getElement(pos);
	    }
	  }, {
	    key: "flattenedBoard",
	    value: function flattenedBoard() {
	      return this.board.flatten();
	    }
	  }, {
	    key: "populateBoard",
	    value: function populateBoard() {
	      this.board.populateGrid();
	    }
	  }, {
	    key: "isSolvable",
	    value: function isSolvable() {
	      var rowIdxOfSpace = this.board.locationOfSpace[0];
	      var numOfInversions = this.numOfInversions();
	
	      if (rowIdxOfSpace % 2 === 0 && numOfInversions % 2 === 0) {
	        return false;
	      }
	
	      if (rowIdxOfSpace % 2 === 1 && numOfInversions % 2 === 1) {
	        return false;
	      }
	
	      return true;
	    }
	  }, {
	    key: "numOfInversions",
	    value: function numOfInversions() {
	      var flattenedBoard = this.flattenedBoard();
	      var inversionCount = 0;
	
	      for (var i = 0; i < flattenedBoard.length; i++) {
	        for (var j = i + 1; j < flattenedBoard.length; j++) {
	          var left = flattenedBoard[i];
	          var right = flattenedBoard[j];
	
	          if (left !== " " && right !== " ") {
	            if (left > right) {
	              inversionCount += 1;
	            }
	          }
	        }
	      }
	
	      return inversionCount;
	    }
	  }], [{
	    key: "createSolvablePuzzle",
	    value: function createSolvablePuzzle() {
	      var newGame = new Game();
	
	      while (!newGame.isSolvable()) {
	        newGame = new Game();
	      }
	
	      return newGame;
	    }
	  }]);
	
	  return Game;
	}();
	
	module.exports = Game;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Board = function () {
	  function Board() {
	    _classCallCheck(this, Board);
	
	    this.grid = Board.makeGrid();
	    this.locationOfSpace = null;
	  }
	
	  _createClass(Board, [{
	    key: "populateGrid",
	    value: function populateGrid() {
	      var gridElements = [" "];
	
	      for (var i = 1; i <= 15; i++) {
	        gridElements.push(i.toString());
	      }
	
	      Board.shuffle(gridElements);
	
	      for (var rowIdx = 0; rowIdx < 4; rowIdx++) {
	        for (var colIdx = 0; colIdx < 4; colIdx++) {
	          var element = gridElements.pop();
	
	          if (element === " ") {
	            this.locationOfSpace = [rowIdx, colIdx];
	          }
	
	          this.grid[rowIdx][colIdx] = element;
	        }
	      }
	    }
	  }, {
	    key: "getElement",
	    value: function getElement(pos) {
	      if (this.validPos(pos)) {
	        return this.grid[pos[0]][pos[1]];
	      }
	    }
	  }, {
	    key: "swapElements",
	    value: function swapElements(pos1, pos2) {
	      var temp = this.grid[pos1[0]][pos1[1]];
	      this.grid[pos1[0]][pos1[1]] = this.grid[pos2[0]][pos2[1]];
	      this.grid[pos2[0]][pos2[1]] = temp;
	    }
	  }, {
	    key: "validPos",
	    value: function validPos(pos) {
	      if (pos[0] < 0 || pos[0] > 3) {
	        return false;
	      } else if (pos[1] < 0 || pos[1] > 3) {
	        return false;
	      }
	
	      return true;
	    }
	  }, {
	    key: "flatten",
	    value: function flatten() {
	      var flattened = [];
	
	      for (var rowIdx = 0; rowIdx < 4; rowIdx++) {
	        for (var colIdx = 0; colIdx < 4; colIdx++) {
	          flattened.push(this.grid[rowIdx][colIdx]);
	        }
	      }
	
	      return flattened;
	    }
	  }], [{
	    key: "makeGrid",
	    value: function makeGrid() {
	      var grid = [];
	
	      for (var rowIdx = 0; rowIdx < 4; rowIdx++) {
	        grid.push([]);
	        for (var colIdx = 0; colIdx < 4; colIdx++) {
	          grid[rowIdx].push(null);
	        }
	      }
	
	      return grid;
	    }
	  }, {
	    key: "shuffle",
	    value: function shuffle(arr) {
	      for (var i = arr.length; i > 0; i--) {
	        var j = Math.floor(Math.random() * i);
	        var _ref = [arr[j], arr[i - 1]];
	        arr[i - 1] = _ref[0];
	        arr[j] = _ref[1];
	      }
	    }
	  }]);
	
	  return Board;
	}();
	
	module.exports = Board;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var View = function () {
	  function View(game, $el) {
	    _classCallCheck(this, View);
	
	    this.game = game;
	    this.$el = $el;
	
	    this.setupBoard();
	  }
	
	  _createClass(View, [{
	    key: "setupBoard",
	    value: function setupBoard() {
	      var $grid = $('<ul>');
	      $grid.addClass("grid");
	      $grid.addClass("group");
	
	      this.appendSquares($grid);
	      this.$el.append($grid);
	      this.tagAllSpaceAdjacentSquares();
	
	      this.setupEvents();
	    }
	  }, {
	    key: "setupEvents",
	    value: function setupEvents() {
	      var _this = this;
	
	      var view = this;
	
	      $('.space-adjacent').click(function (event) {
	        var $square = $(event.currentTarget);
	        var currentPos = $square.data("pos");
	        if (_this.game.playMove(currentPos)) {
	          view.updateBoard();
	        }
	      });
	    }
	  }, {
	    key: "updateBoard",
	    value: function updateBoard() {
	      var $grid = $('.grid');
	      var flattenedBoard = this.game.flattenedBoard();
	
	      $grid.empty();
	      this.appendSquares($grid);
	      this.tagAllSpaceAdjacentSquares();
	
	      this.setupEvents();
	    }
	  }, {
	    key: "appendSquares",
	    value: function appendSquares($grid) {
	      for (var rowIdx = 0; rowIdx < 4; rowIdx++) {
	        for (var colIdx = 0; colIdx < 4; colIdx++) {
	          var $square = $('<li>');
	          $square.addClass("square");
	          $square.data("pos", [rowIdx, colIdx]);
	          var element = this.game.getElement([rowIdx, colIdx]);
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
	  }, {
	    key: "tagAllSpaceAdjacentSquares",
	    value: function tagAllSpaceAdjacentSquares() {
	      var $squares = $('.square');
	      var idxOfSpace = $squares.index($('.space')[0]);
	
	      if (idxOfSpace - 4 >= 0) {
	        $($squares[idxOfSpace - 4]).addClass('space-adjacent');
	      }
	
	      if (idxOfSpace + 4 <= 15) {
	        $($squares[idxOfSpace + 4]).addClass('space-adjacent');
	      }
	
	      if (idxOfSpace % 4 !== 0) {
	        $($squares[idxOfSpace - 1]).addClass('space-adjacent');
	      }
	
	      if (idxOfSpace % 4 !== 3) {
	        $($squares[idxOfSpace + 1]).addClass('space-adjacent');
	      }
	    }
	  }]);
	
	  return View;
	}();
	
	module.exports = View;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map