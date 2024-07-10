import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });


  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue){
    setUserInput((prevUserInput)=>{
      return {...prevUserInput, [inputIdentifier]: +newValue}; //the inputIdentifier can be any of the keys of the userInput state object like initialInvestment or annualInvestment or expectedReturn or duration, newValue is the value entered by the user in that particular input field specified by the inputIdentifier, we return a new object, which is the new value of the userInput state by copying its previous values (using the spread operator) and overriding the value that has been changed.
      // adding a + before newValue will force the conversion of the string value to a number value thereby removing the bug we had before, as event.target.value always gives a string in javascript.
    })
  }


  return (
    <>
      <Header />
      <UserInput inputData={userInput} onChangeInput={handleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  );
}

export default App;
