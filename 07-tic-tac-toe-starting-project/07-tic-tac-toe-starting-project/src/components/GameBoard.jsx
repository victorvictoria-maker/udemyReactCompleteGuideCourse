import { useState } from "react";

export default function GameBoard() {
  const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [gameBoard, setGameBoard] = useState(initialBoard);

  let updateBoard = (rowIndex, buttonIndex) => {
    setGameBoard((initialBoardGame) => {
      const updatedBoard = [
        ...initialBoardGame.map((eachBoardRow) => [...eachBoardRow]),
      ];
      updatedBoard[rowIndex][buttonIndex] = "X";
      return updatedBoard;
    });
  };

  return (
    <ol id='game-board'>
      {gameBoard.map((eachRow, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {eachRow.map((playerSymbol, buttonIndex) => {
                return (
                  <li key={buttonIndex}>
                    <button onClick={() => updateBoard(rowIndex, buttonIndex)}>
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
