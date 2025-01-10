
import { useState } from "react";
import './App.css';

function App() {

  const [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log("Counter Value", counter);
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);

    //this is to prevent the counter from going below 0
    if (counter <= 0) {
      setCounter(0);
    }
  }

  return (
    <>
      <h1>Hi There</h1>

      <h2>Counter Value {counter} </h2>
      <button
        onClick={addValue}> Add Value </button>
      <br />
      <button
        onClick={removeValue}> Remove Value </button>




    </>
  )
}

export default App;
