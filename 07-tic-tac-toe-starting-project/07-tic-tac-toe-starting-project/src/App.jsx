import { useState } from "react";

import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  let switchPlayer = (row, column) => {
    setCurrentPlayer((curPlayer) => (curPlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      let activePlayer = "X";

      if (gameTurns.length > 0 && prevTurns[0].player === "X") {
        activePlayer = "O";
      }

      const updatedTurns = [
        {
          chosenBox: { row, column },
          player: activePlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
    // console.log(row, column);
  };

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
        <GameBoard switchPlayer={switchPlayer} gameTurns={gameTurns} />
      </div>
      LOG
    </main>
  );
}

export default App;
