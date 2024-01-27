import HeaderComponent from "./components/HeaderComponent";
import Results from "./components/Result";
import UserInput from "./components/UserInput";

import { useState } from "react";

function App() {
  const [userInputValue, setUserInputValue] = useState({
    initialInvestment: 100000,
    annualInvestment: 50000,
    expectedReturn: 9,
    duration: 10,
  });

  const validUserInput = userInputValue.duration > 0;

  let getUserInput = (valueTag, inputValue) => {
    setUserInputValue((prevValue) => {
      return {
        ...prevValue,
        [valueTag]: +inputValue,
      };
    });
  };

  return (
    <>
      <HeaderComponent />
      <UserInput userInputValue={userInputValue} getUserInput={getUserInput} />
      {validUserInput ? (
        <Results userInputValue={userInputValue} />
      ) : (
        <p className='center'>
          Please, you can not invest less than a year so enter a valid duration.
        </p>
      )}
    </>
  );
}

export default App;
