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
                gameState.checkWinCondition(Gameboard.gameboard);
                break;

            case 'X':
                console.log('SPOT OCCUPIED :(');
                return _computerPlay();

            case 'O':
                console.log('SPOT OCCUPIED :(');
                return _computerPlay();
        }
        // console.log(`Index_${Gameboard.gameboard.indexOf(Gameboard.gameboard[randomIndex])}: ${Gameboard.gameboard[randomIndex]}`);
        // console.log(Gameboard.gameboard);
    }


    const _buildBoard = () => {
        const roundTracker = document.querySelector('round');
        let roundSpan = document.createElement('span');
        roundSpan.textContent = round;
        roundTracker.appendChild(roundSpan);

        Gameboard.gameboard.forEach(() => {
            const square = document.getElementById(`${count}`);

            square.addEventListener('click', function (e) {
                if (e.target.textContent === 'X' ||
                    e.target.textContent === 'O') {
                    console.log("CANT DO THAT")

                } else {
                    roundSpan.textContent = round += 1;
                    e.target.textContent = 'X';
                    Gameboard.gameboard.splice(e.target.id, 1, 'X');
                    gameState.checkWinCondition(Gameboard.gameboard);
                    _computerPlay();
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


    //should allow user to restart game 
    const checkWinCondition = (arr) => {
        for (const key in winConditions) {
            if (arr[(winConditions[key][0])] === "X" &&
                arr[(winConditions[key][1])] === "X" &&
                arr[(winConditions[key][2])] === "X") {
                console.log('YOU WIN');


            } 
            else
                if (arr[(winConditions[key][0])] === "O" &&
                    arr[(winConditions[key][1])] === "O" &&
                    arr[(winConditions[key][2])] === "O") {
                    console.log('YOU LOSE');

                }

            // CHECKS IF TIE

        }
    }

    return {
        checkWinCondition,
    }
})();
