class View {

  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.board = this.setupBoard();
    this.$el.append(this.board);
    this.bindEvents();
    // this.marks = {
    //   'x': ;
    //   'o': ;
    // }
  }

  bindEvents() {
      $('li').on("click", (event) => {
        let $square = $(event.currentTarget);
        this.makeMove($square);
    });
  }

  makeMove($square) {
    // set variable to current player
    //play the move
    //update html
    //update
    // maybe add if statement to check for error
    let player = this.game.currentPlayer;
    const game = this.game;
    const board = game.board;
    const winner = board.winner();

    game.playMove($square.data("pos"));
    $square.addClass(player);
    // (player === "x") ? $square.addClass("")

    if (this.game.isOver()) {
      if (this.game.board.winner()) {
        alert(`${this.game.board.winner()} is the winner!`);
      } else {
        alert('boring ass motherfuckers');
      }
    }



  }

  setupBoard() {
    let ul = $("<ul></ul>");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = $("<li></li>");
        li.data("pos", [i, j]);
        (ul).append(li);
      }
    }
    return ul;
  }
}

module.exports = View;
