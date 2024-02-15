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

const INITIAL_PLAYERS_NAME = {
  X: "Player 1",
  O: "Player 2",
};

// HANDLES EACH BOX IN THE GAME BOARD
const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// DERIVE GAME BOARD
const deriveGameBoard = (gameTurns) => {
  // IMMUTABILITY MATTERS
  let gameBoard = [...INITIAL_BOARD.map((eachRow) => [...eachRow])];

  for (const eachTurn of gameTurns) {
    const { chosenBox, player: activePlayer } = eachTurn;
    const { row, column } = chosenBox;
    gameBoard[row][column] = activePlayer;
  }

  return gameBoard;
};

// HANDLES WINNING IN THE GAME
const getWinner = (gameBoard, eachPlayerName) => {
  let winner = null;

  for (const eachCombination of WINNING_COMBINATIONS) {
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
      winner = eachPlayerName[playerInFirstBoxCombination];
    }
  }

  return winner;
};

// COMPONENT FUNCTION
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [eachPlayerName, setEachPlayerName] = useState(INITIAL_PLAYERS_NAME);

  // HANDLES EACH PLAYER'S NAME
  const handlePlayerNameChange = (symbol, playerName) => {
    setEachPlayerName((prevPlayerNames) => {
      return {
        ...prevPlayerNames,
        [symbol]: playerName,
      };
    });
  };

  const currentPlayer = getCurrentPlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);

  // HANDLES WINNINGS AND DRAWS
  const winner = getWinner(gameBoard, eachPlayerName);
  const gameDraw = gameTurns.length === 9 && !winner;

  // HANDLES GAME RESTART
  const restartGame = () => {
    setGameTurns([]);

    // ATTENTIPON!!!!
    // RESET THE PLAYER NAMES TO THE DEFAULT NAME
    // setEachPlayerName(INITIAL_PLAYERS_NAME);
    // console.log(INITIAL_PLAYERS_NAME, eachPlayerName);
    // setEachPlayerName(INITIAL_PLAYERS_NAME);
  };

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
            initialName={INITIAL_PLAYERS_NAME.X}
            symbol='X'
            isActive={currentPlayer === "X"}
            handlePlayerNameChange={handlePlayerNameChange}
          />
          <PlayerInfo
            initialName={INITIAL_PLAYERS_NAME.O}
            symbol='O'
            isActive={currentPlayer === "O"}
            handlePlayerNameChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || gameDraw) && (
          <GameOver winner={winner} restartGame={restartGame} />
        )}
        <GameBoard switchPlayer={switchPlayer} gameBoard={gameBoard} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
