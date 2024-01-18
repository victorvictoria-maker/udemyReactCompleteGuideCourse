import { useState } from "react";

export default function PlayerInfo({ initialName, symbol }) {
  useState();

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  let handlePlayerName = () => {
    setIsEditing((editing) => !editing);

    if (!isEditing) {
      changePlayerName();
    }
  };

  let changePlayerName = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li>
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
      <button onClick={handlePlayerName}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
