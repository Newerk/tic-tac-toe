/*What is the maximum number of moves in tic-tac-toe?
While the minimum number of moves to win a game is five, the maximum number of moves in any game is nine*/

/*think about what should be public or private*/

//Factory funtions return objects. Modules are the same, except they immediately invoke the function by putting "();"" at the end

/*When a space in the gameboard is clicked it will get the symbol of the current player and output it onto the board.
A player cannot place their symbol more than once per turn. */

/*The symbols should appear on the board based on the index in the game.Gameboard.gameboard index */

/*tic tac toe win conditions (can win within 5 to 8 rounds) if game reaches 9 rounds, its a tie
if player symbols are index's:
 0,1,2 or 3,4,5 or 6,7,8 (horizonal wins)
 0,3,6 or 1,4,7 or 2,5,8 (vertical wins)
 0,4,8 or 2,4,6 (diagnol wins)

 THERE ARE A TOTAL OF 8 WIN CONDITIONS

 Everytime a player or the computer(will worry about this later) inserts their symbol on the board, it will check for the win conditions
*/

//In my Tic Tac Toe game, the player will always be 'X' and go first, unless they want to


//Anonymous Module
(() => {
    let count = 0

    const Gameboard = {
        gameboard:
            [null, null, null,
                null, null, 'O',
                null, null, null],
    }


    const _buildBoard = () => {
        Gameboard.gameboard.forEach(() => {

            const square = document.getElementById(`${count}`);
            square.addEventListener('click', function (e) {
                e.target.textContent = 'X';
                Gameboard.gameboard.splice(e.target.id, 1, 'X');
                gameState.checkWinCondition(Gameboard.gameboard)
            })

            if (count !== 9) {
                square.textContent = Gameboard.gameboard[count];
                count++;
            }
        })
    }
    _buildBoard();

})();

const gameState = (() => {
    //these numbers represent the indexs of the TTT board
    const winConditions = {
        //horizontal wins
        h1: [0, 1, 2],
        h2: [3, 4, 5],
        h3: [6, 7, 8],

        //verticle wins
        v1: [0, 3, 6],
        v2: [1, 4, 7],
        v3: [2, 5, 8],

        //diagnol wins
        d1: [0, 4, 8],
        d2: [2, 4, 6],
    }

    const checkWinCondition = (arr) => {
        for (const key in winConditions) {
            if (arr[(winConditions[key][0])] === "X" &&
                arr[(winConditions[key][1])] === "X" &&
                arr[(winConditions[key][2])] === "X") {
                console.log('YOU WIN');

            } else
                if (arr[(winConditions[key][0])] === "O" &&
                    arr[(winConditions[key][1])] === "O" &&
                    arr[(winConditions[key][2])] === "O") {
                    console.log('YOU LOSE');

                }

            //CHECKS IF TIE
            // else if (condition) {
            //     console.log('YOU WIN');
            // }

        }
    }

    return {
        checkWinCondition,
    }
})();

//a function that will check if a spot if occupied
        // if (symbolIndex !== null) {
        //     //do nothing if there is a a symbol already occupying a spot
        //     console.log('OCCUPIED');
        //     // return;
        // } else {
        //     console.log('SPOT EMPTY');
        // }