import React, {useState, useEffect} from 'react';
import './App.css';

function AppOne() {
  //ComponentWillUnmount
  useEffect(() => {
    return() => {console.log("componentDidUnmount App1")}
  }, []);
  return (
    <div>
    <h2>app1</h2>
    </div>
    );
}

export default AppOne;
