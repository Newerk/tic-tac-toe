/*What is the maximum number of moves in tic-tac-toe?
While the minimum number of moves to win a game is five, the maximum number of moves in any game is nine*/

/*think about what should be public or private*/

//Factory funtions return objects. Modules are the same, except they immediately invoke the function by putting "();"" at the end

/*When a space in the gameboard is clicked it will get the symbol of the current player and output it onto the board.
A player cannot place their symbol more than once per turn. */

//gameboard Module
const game = (() => {




    const Gameboard = {
        gameboard:
            [null, null, null,
                null, null, null,
                null, null, null],


        buildBoard: function () {
            let count = 0
            this.gameboard.forEach(el => {
                el = 0;
                const square = document.getElementById(`square_${count}`);
                
                if (count !== 9) {
                    const insertSymbol = () => {
                        const playerChoice = PlayerInfo('X');
                        square.textContent = playerChoice.getSymbol();
                    }
                    square.addEventListener('click', insertSymbol)
                    console.log(el);
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

const PlayerInfo = (symbol) => {
    const getSymbol = () => symbol;

    return { getSymbol }
}

// const choseX = PlayerInfo('X');
// choseX.getSymbol();



// console.log(game.Gameboard.gameboard);