import React, {useState} from 'react';
import UserInput from './userInput';
import UserOutput from './userOutput';

var Container = () => {

    const [userName, setUserName] = useState({"username":"Sagar"});

    return(
        <React.Fragment>
            <UserInput/>
            <UserOutput/>
        </React.Fragment>
    )
}
export default Container;