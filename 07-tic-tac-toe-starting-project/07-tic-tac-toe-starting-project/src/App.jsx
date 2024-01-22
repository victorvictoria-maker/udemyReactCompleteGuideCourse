import { useState } from "react";

import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";
import Log from "./components/Log";

import { WINNING_COMBINATIONS } from "./WINNING_COMBINATIONS";
import GameOver from "./components/GameOver";

// THIS FUNCTION SWITCHES PLAYER BWETWWEN X AND O
const getCurrentPlayer = (gameTurns) => {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

// COMPONENT FUNCTION
function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = getCurrentPlayer(gameTurns);

  // HANDLES EACH BOX IN THE GAME BOARD
  const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  let gameBoard = initialBoard;

  for (const eachTurn of gameTurns) {
    const { chosenBox, player: activePlayer } = eachTurn;
    const { row, column } = chosenBox;
    gameBoard[row][column] = activePlayer;
  }

  // HANDLES WINNING IN THE GAME
  let winner = null;

  for (const eachCombination of WINNING_COMBINATIONS) {
    // console.log(eachCombination);
    const playerInFirstBoxCombination =
      gameBoard[eachCombination[0].row][eachCombination[0].column];
    const playerInSecondBoxCombination =
      gameBoard[eachCombination[1].row][eachCombination[1].column];
    const playerInThirdBoxCombination =
      gameBoard[eachCombination[2].row][eachCombination[2].column];

    if (
      playerInFirstBoxCombination &&
      playerInFirstBoxCombination === playerInSecondBoxCombination &&
      playerInFirstBoxCombination === playerInThirdBoxCombination
    ) {
      winner = playerInFirstBoxCombination;
    }
  }

  const gameDraw = gameTurns.length === 9 && !winner;

  // THIS FUNCTION RUNS ON CLICK OF EVERY BUTTON IN THE GAME BOARD
  let switchPlayer = (row, column) => {
    setGameTurns((prevTurns) => {
      let activePlayer = getCurrentPlayer(prevTurns);

      const updatedTurns = [
        {
          chosenBox: { row, column },
          player: activePlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  // THE JSX TO BE DISPLAYED
  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <PlayerInfo
            initialName='Player 1'
            symbol='X'
            isActive={currentPlayer === "X"}
          />
          <PlayerInfo
            initialName='Player 2'
            symbol='O'
            isActive={currentPlayer === "O"}
          />
        </ol>
        {(winner || gameDraw) && <GameOver winner={winner} />}
        <GameBoard switchPlayer={switchPlayer} gameBoard={gameBoard} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
