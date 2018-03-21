const View = require("./ttt-view");
const Game = require("../solution/game");


$( () => {
  const game = new Game();
  let $tttBoard = $(".ttt");
  const view = new View(game, $tttBoard);
});
