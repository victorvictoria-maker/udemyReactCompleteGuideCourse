export default function Log({ gameTurns }) {
  return (
    <ol id='log'>
      {gameTurns.length > 0 &&
        gameTurns.map((eachTurn) => {
          return (
            <li key={`${eachTurn.chosenBox.row}${eachTurn.chosenBox.column}`}>
              Player {eachTurn.player} selected ({eachTurn.chosenBox.row + 1}
              {" ,"}
              {eachTurn.chosenBox.column + 1})
            </li>
          );
        })}
    </ol>
  );
}
