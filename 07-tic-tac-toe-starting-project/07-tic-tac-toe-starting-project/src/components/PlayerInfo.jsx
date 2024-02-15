import { useState } from "react";

export default function PlayerInfo({
  initialName,
  symbol,
  isActive,
  handlePlayerNameChange,
}) {
  useState();

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  let handlePlayerName = () => {
    setIsEditing((editing) => !editing);
  };

  let changePlayerName = (e) => {
    setPlayerName(e.target.value);
  };

  const savePlayerName = () => {
    handlePlayerNameChange(symbol, playerName);
    handlePlayerName();
  };

  return (
    <li className={isActive ? "active" : ""}>
      <span className='player'>
        {!isEditing ? (
          <span className='player-name'>{playerName}</span>
        ) : (
          <input
            type='text'
            required
            className='player-name'
            value={playerName}
            onChange={changePlayerName}
          />
        )}

        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={isEditing ? savePlayerName : handlePlayerName}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
