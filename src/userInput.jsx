import React from 'react';

var userInput = (props) => {

    return(
        <input onChange={props.updateUserName} value={props.userName}/>
    )
}
export default userInput;