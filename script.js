/*What is the maximum number of moves in tic-tac-toe?
While the minimum number of moves to win a game is five, the maximum number of moves in any game is nine*/

/*think about what should be public or private*/

//Factory funtions return objects. Modules are the same, except they immediately invoke the function by putting "();"" at the end

//gameboard Module
const game = (() => {

    const Gameboard = {
        gameboard:
               ["", "", "",
                "", "", "",
                "", "", ""]
    }

    //controls flow of game. perhaps the winning/tie conditions are placed here
    const Gameplay = {

    }

    return {
        Gameboard,
        Gameplay
    }
})();

const PlayerInfo = (symbol) => {
    const getSymbol = () => console.log(`my symbol is ${symbol}`);

    return {getSymbol}
}

const choseX = PlayerInfo('X');
choseX.getSymbol();



console.log(game.Gameboard.gameboard);