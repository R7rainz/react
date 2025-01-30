import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './features/counter/counterSlice';
function App() {

  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleReset() {
    dispatch(reset());
  }
  function handleIncAmountcount() {
    dispatch(incrementByAmount(amount));
  }
  const handleChange = (event) => {
    let value = event.target.value;

    if (value.startsWith(0) && value.length > 1) value = value.slice(1);
    setAmount(value);
  }
  return (
    <div className='container'>
      <button onClick={handleIncrementClick}> + </button>
      <p>Count : {count} </p>
      <button onClick={handleDecrementClick}> - </button>
      <br />
      <br />
      <button onClick={handleReset}> RESET </button>
      <input type="Number" value={amount} placeholder='enter the amount' onChange={handleChange} />
      <button onClick={handleIncAmountcount}>Click me pls daddy</button>
    </div>
  )
}

export default App
