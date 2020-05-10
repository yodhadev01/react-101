import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(true);
  const [effectCount, setEffectCount] = useState(0)
  // Similar to componentDidMount and componentDidUpdate:
  //ComponentDidUpdate
  useEffect(() => {
    console.log("ComponentDidUpdate")
    setEffectCount(effectCount + 1)
  }, [count]);
  //componentDidMount
  useEffect(() => {
    console.log("componentDidMount")
    setEffectCount(effectCount + 100)
  }, []);
  useEffect(() => {
    return() => {console.log("componentDidUnmount")}
  }, []);  
  return (
    <div>
    {active ? <h1>SHOW</h1> : 
      <div>
      <h1>u Have Clicked it {effectCount} times</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        +++++
      </button>
      <button onClick={() => setCount(count - 1)}>
        -----
      </button>
      </div>}
      <button onClick={() => setActive(!active)}>
        toggle
      </button>
    </div>
    );
}

export default App;
