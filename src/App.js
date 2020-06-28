import React from 'react';
import Show from './show'
function App() {

  let checked = true;
  let label = 1; //Show component wats it of string type so it will show error
  let handleClick = () => {return 1}
  return (
    <Show checked={checked} label={label} handleClick={handleClick}/>
  );
}

export default App;
