import React from 'react';
import MemoUser from './memoUser';
function App() {
  const [value, setValue] = React.useState("value");
  let onChangeHandler = (e) => {
    setValue(e.target.value);
  }
  return (
    <React.Fragment>
      <input onChange={onChangeHandler} value={value}/>
      <MemoUser data={value}/>
    </React.Fragment>
  );
}

export default App;
