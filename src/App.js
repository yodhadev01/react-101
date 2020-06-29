import React from 'react';
import MiddleMost from './middleMost';
import AuthContext from './contextContainer';
function App() {
  return (
    <AuthContext.Provider value={{auth:"final value"}}>
      <MiddleMost/>
    </AuthContext.Provider>
  );
}

export default App;
