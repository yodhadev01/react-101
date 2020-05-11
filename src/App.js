import React, {useState, useEffect} from 'react';
import './App.css';
import AppOne from './AppOne'
import AppTwo from './AppTwo'

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
  return (
    <div>
    {active ? <AppOne/>: <AppTwo/>}
      <div>
      <h1>u Have Clicked it {effectCount} times</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        +++++
      </button>
      <button onClick={() => setCount(count - 1)}>
        -----
      </button>
      </div>
      <button onClick={() => setActive(!active)}>
        toggle
      </button>
    </div>
    );
}

export default App;
