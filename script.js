const game = (() => {
    let count = 0;
    let round = 1;
    let indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    let indexCount = 0;

    const Gameboard = {
        gameboard:
            [null, null, null,
                null, null, null,
                null, null, null],
    }

    // random will choose from a list of remaining index. what ever index it lands on, that index will be searched in the gameboard, and be replaced with O. the chosen index will also be removed from the list
    const _computerPlay = () => {
        gameState.checkWinCondition(Gameboard.gameboard);


        let randomNum = Math.floor(Math.random() * indexes.length);

        //index location the computer will play at on the indexes list
        let chosenIndex = indexes[randomNum];

        const square = document.getElementById(`${chosenIndex}`);


        if (Gameboard.gameboard[chosenIndex] === null) {
            console.log(`CPU: empty spot`)
            square.textContent = 'O';
            Gameboard.gameboard[chosenIndex] = 'O';
            indexes.splice(indexes.indexOf(chosenIndex), 1);

        }else if (indexes.length === 0) {
            return;
        }
        else {
            console.log(`CPU: occupied spot`)
            _computerPlay();

        }

        console.log(`indexes length: ${indexes.length}`)



    }



    const _buildBoard = () => {
        const roundTracker = document.querySelector('round');
        let roundSpan = document.createElement('span');
        roundSpan.textContent = round;
        roundTracker.appendChild(roundSpan);

        Gameboard.gameboard.forEach(() => {
            const square = document.getElementById(`${count}`);
            square.addEventListener('click', function (e) {
                if (indexes.length === 1) {
                    console.log(`do nothing`)
                }

                if (e.target.textContent === 'X' ||
                    e.target.textContent === 'O') {
                    console.log("CANT DO THAT")

                } else {

                    roundSpan.textContent = round += 1;
                    e.target.textContent = 'X';
                    Gameboard.gameboard.splice(parseInt(e.target.id), 1, 'X');
                    // gameState.checkWinCondition(Gameboard.gameboard);

                    indexes.splice(indexes.indexOf(parseInt(e.target.id)), 1);
                    _computerPlay();
                    gameState.checkWinCondition(Gameboard.gameboard);
                    gameState.checkTieCondition();

                }

            })

            if (count !== 9) {
                square.textContent = Gameboard.gameboard[count];
                count++;
            }
            
        })
    }
    _buildBoard();

    return {
        Gameboard
    }
})();

const gameState = (() => {

    let winnerChosen;

    //these numbers represent the indexes of the TTT board
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

    const gameboard = document.querySelectorAll('.gameboard');


    //should allow user to restart game 
    const checkWinCondition = (arr) => {


        for (const key in winConditions) {
            const square1 = document.getElementById(winConditions[key][0]);
            const square2 = document.getElementById(winConditions[key][1]);
            const square3 = document.getElementById(winConditions[key][2]);
            const winColor = '#AEFF2D';
            const loseColor = '#FF2D2D';


if (arr[(winConditions[key][0])] === "X" &&
                arr[(winConditions[key][1])] === "X" &&
                arr[(winConditions[key][2])] === "X") {
                square1.setAttribute('style', `background-color: ${winColor}`)
                square2.setAttribute('style', `background-color: ${winColor}`)
                square3.setAttribute('style', `background-color: ${winColor}`)

                winnerChosen = true;
                popUpMenu.popupBox('YOU WIN!');
            }
            else
                if (arr[(winConditions[key][0])] === "O" &&
                    arr[(winConditions[key][1])] === "O" &&
                    arr[(winConditions[key][2])] === "O") {
                    square1.setAttribute('style', `background-color: ${loseColor}`)
                    square2.setAttribute('style', `background-color: ${loseColor}`)
                    square3.setAttribute('style', `background-color: ${loseColor}`)

                    winnerChosen = true;
                    popUpMenu.popupBox('YOU LOSE');
                }



        }
    }

    const checkTieCondition = () => {
        if (!game.Gameboard.gameboard.includes(null) && winnerChosen !== true) {
            popUpMenu.popupBox('ITS A TIE');

        } else {
            return;
        }
    }

    return {
        checkWinCondition,
        checkTieCondition
    }
})();


const popUpMenu = (() => {
    const resetPage = () => {
        location.reload();
    }

    //function that builds Pop-up for winning or losing round
    const popupBox = (outcome) => {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        const popup = document.createElement('div');
        popup.className = 'popup-box';

        const result = document.createElement('div');
        result.id = 'win-lose';
        result.textContent = outcome;

        const replayBtn = document.createElement('button');
        replayBtn.id = 'play-again-btn';
        replayBtn.textContent = 'Play Again?';

        replayBtn.addEventListener('click', resetPage);

        popup.appendChild(result);
        popup.appendChild(replayBtn);

        overlay.appendChild(popup)

        document.body.appendChild(overlay);
    };


    return {
        popupBox
    }
})();