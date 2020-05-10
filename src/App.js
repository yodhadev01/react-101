import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstCounter, setFirstCounter] = useState({"firstValue":0});
  const [secondCounter, setSecondCounter] = useState({"secondValue":0});

  let firstCounterUpdate = value => {

    setFirstCounter({"firstValue": firstCounter.firstValue + value})
  
  }
  let secondCounterUpdate = value => {

    setSecondCounter({"secondValue": secondCounter.secondValue + value})
  
  }
  return (
    <div>
      <p>{firstCounter.firstValue}</p>
      <p>{secondCounter.secondValue}</p>
      <button onClick={() => firstCounterUpdate(1)}>first up</button>
      <button onClick={() => firstCounterUpdate(-1)}>first down</button>
      <button onClick={() => secondCounterUpdate(1)}>second up</button>
      <button onClick={() => secondCounterUpdate(-1)}>second </button>
    </div>
  );
}

export default App;
