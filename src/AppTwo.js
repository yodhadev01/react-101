import React, {useState, useEffect} from 'react';
import './App.css';

function AppTwo() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(true);
  const [effectCount, setEffectCount] = useState(0)
  //ComponentWillUnmount
  useEffect(() => {
    return() => {console.log("componentDidUnmount App2")}
  }, []);  
  return (
    <div>
    <h3>app2</h3>
    </div>
    );
}

export default AppTwo;
