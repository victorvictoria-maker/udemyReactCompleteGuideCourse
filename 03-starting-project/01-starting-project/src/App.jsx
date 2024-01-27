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

  let getUserInput = (valueTag, inputValue) => {
    setUserInputValue((prevValue) => {
      return {
        ...prevValue,
        [valueTag]: inputValue,
      };
    });
  };

  return (
    <>
      <HeaderComponent />
      <UserInput userInputValue={userInputValue} getUserInput={getUserInput} />
      <Results userInputValue={userInputValue} />
    </>
  );
}

export default App;
