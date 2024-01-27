export default function UserInput({ userInputValue, getUserInput }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>Initial Investment</label>
          <input
            type='number'
            required
            value={userInputValue.initialInvestment}
            onChange={(e) => getUserInput("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type='number'
            required
            value={userInputValue.annualInvestment}
            onChange={(e) => getUserInput("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>Expected Return</label>
          <input
            type='number'
            required
            value={userInputValue.expectedReturn}
            onChange={(e) => getUserInput("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type='number'
            required
            value={userInputValue.duration}
            onChange={(e) => getUserInput("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
