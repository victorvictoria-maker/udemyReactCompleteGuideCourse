import { useState } from "react";

import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  let switchPlayer = () => {
    setCurrentPlayer((curPlayer) => (curPlayer === "X" ? "O" : "X"));
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
        <GameBoard switchPlayer={switchPlayer} currentPlayer={currentPlayer} />
      </div>
      LOG
    </main>
  );
}

export default App;
