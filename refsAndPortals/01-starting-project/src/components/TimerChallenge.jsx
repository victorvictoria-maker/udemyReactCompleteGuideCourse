import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [expiredTime, setExpiredTime] = useState(false);

  let startChallenge = () => {
    setTimerStarted(true);

    setTimeout(() => {
      setExpiredTime(true);
    }, targetTime * 1000);
  };

  return (
    <section className='challenge'>
      <h2>{title}</h2>
      {expiredTime && <p>You lost!</p>}
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={startChallenge}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Time is inactive"}
      </p>
    </section>
  );
}
