import React from 'react';

// if there will be any changes in props then only this function render again
function MemoUser(props) {
    console.log("memo run");
  return (
    <h1>Hello!!</h1>
  );
}

export default React.memo(MemoUser);
// React.memo(MemoUser)