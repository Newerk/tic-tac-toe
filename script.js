/*What is the maximum number of moves in tic-tac-toe?
While the minimum number of moves to win a game is five, the maximum number of moves in any game is nine*/

/*think about what should be public or private*/

//Factory funtions return objects. Modules are the same, except they immediately invoke the function by putting "();"" at the end

/*When a space in the gameboard is clicked it will get the symbol of the current player and output it onto the board.
A player cannot place their symbol more than once per turn. */

/*The symbols should appear on the board based on the index in the game.Gameboard.gameboard index */

//gameboard Module
const game = (() => {

    const Gameboard = {
        gameboard:
            ["X", "X", "O",
            "O", "X", null,
            "O", null, "X"],


        buildBoard: function () {
            let count = 0
            this.gameboard.forEach(() => {
                const square = document.getElementById(`square_${count}`);

                if (count !== 9) {
                    square.textContent = Gameboard.gameboard[count];

                    count++;
                }

            })

        }
    }

    //controls flow of game. perhaps the winning/tie conditions are placed here
    const Gameplay = {

    }

    return {
        Gameboard,
        Gameplay
    }
})();

game.Gameboard.buildBoard();

const PlayerSymbol = (symbol) => {
    const getSymbol = () => symbol;

    return { getSymbol }
}

// const choseX = PlayerSymbol('X');
// choseX.getSymbol();
// const choseO = PlayerSymbol('O');
// choseO.getSymbol();




// console.log(game.Gameboard.gameboard);