import { useState } from "react";

export default function GameBoard({ switchPlayer, gameTurns }) {
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

  // const [gameBoard, setGameBoard] = useState(initialBoard);

  // let updateBoard = (rowIndex, buttonIndex) => {
  //   setGameBoard((initialBoardGame) => {
  //     const updatedBoard = [
  //       ...initialBoardGame.map((eachBoardRow) => [...eachBoardRow]),
  //     ];
  //     updatedBoard[rowIndex][buttonIndex] = currentPlayer;
  //     return updatedBoard;
  //   });

  //   switchPlayer();
  // };

  return (
    <ol id='game-board'>
      {gameBoard.map((eachRow, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {eachRow.map((playerSymbol, buttonIndex) => {
                return (
                  <li key={buttonIndex}>
                    {/* <button onClick={() => updateBoard(rowIndex, buttonIndex)}>
                      {playerSymbol}
                    </button> */}
                    <button onClick={() => switchPlayer(rowIndex, buttonIndex)}>
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
