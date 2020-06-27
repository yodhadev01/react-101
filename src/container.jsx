import React, {useState} from 'react';
import UserInput from './userInput';
import UserOutput from './userOutput';

var Container = () => {
    
    return(
        <React.Fragment>
            <UserInput/>
            <UserOutput/>
        </React.Fragment>
    )
}
export default Container;