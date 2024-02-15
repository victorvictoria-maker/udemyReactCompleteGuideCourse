import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [playerUserName, setPlayerUserName] = useState(null);

  let setPlayerName = () => {
    setPlayerUserName(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <section id='player'>
      <h2>Welcome {playerUserName ?? "User"}</h2>
      <p>
        <input ref={playerName} type='text' />
        <button onClick={setPlayerName}>Set Name</button>
      </p>
    </section>
  );
}
