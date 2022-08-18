(() => {
    let count = 0;
    let round = 1;

    const Gameboard = {
        gameboard:
            [null, null, null,
                null, null, null,
                null, null, null],
    }

    const _computerPlay = () => {
        let randomIndex = Math.floor((Math.random() * 8));
        let square = document.getElementById(randomIndex);

        switch (Gameboard.gameboard[randomIndex]) {
            case null:
                console.log('EMPTY SPOT, YAY!');
                square.textContent = 'O';
                Gameboard.gameboard[randomIndex] = 'O';
                // gameState.checkWinCondition(Gameboard.gameboard);
                break;

            case 'X':
                console.log('SPOT OCCUPIED :(');
                return _computerPlay();

            case 'O':
                console.log('SPOT OCCUPIED :(');
                return _computerPlay();
        }
    }


    const _buildBoard = () => {
        const roundTracker = document.querySelector('round');
        let roundSpan = document.createElement('span');
        roundSpan.textContent = round;
        roundTracker.appendChild(roundSpan);

        Gameboard.gameboard.forEach(() => {
            const square = document.getElementById(`${count}`);
            square.setAttribute('style', 'transistion: 1s; opacity: 1;')

            square.addEventListener('click', function (e) {
                if (e.target.textContent === 'X' ||
                    e.target.textContent === 'O') {
                    console.log("CANT DO THAT")

                } else {
                    roundSpan.textContent = round += 1;
                    e.target.textContent = 'X';
                    Gameboard.gameboard.splice(e.target.id, 1, 'X');
                    _computerPlay();
                    gameState.checkWinCondition(Gameboard.gameboard);

                }
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


    //should allow user to restart game 
    const checkWinCondition = (arr) => {
        //function that builds Pop-up for winning or losing round
        const _popupBox = (outcome) => {
            const popup = document.createElement('div');
            popup.className = 'popup-box';
            
            const result = document.createElement('div');
            result.id = 'win-lose';
            result.textContent = outcome;

            const replayBtn = document.createElement('button');
            replayBtn.id = 'play-again-btn';


            popup.appendChild(result);
            popup.appendChild(replayBtn);

            document.body.appendChild(popup);

        };


        for (const key in winConditions) {
            if (arr[(winConditions[key][0])] === "X" &&
                arr[(winConditions[key][1])] === "X" &&
                arr[(winConditions[key][2])] === "X") {
                _popupBox('YOU WIN!')
            }
            else
                if (arr[(winConditions[key][0])] === "O" &&
                    arr[(winConditions[key][1])] === "O" &&
                    arr[(winConditions[key][2])] === "O") {
                    _popupBox('YOU LOSE')

                }

            // CHECKS IF TIE

        }
    }

    return {
        checkWinCondition,
    }
})();
