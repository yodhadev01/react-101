import React, {useState} from 'react';
import UserInput from './userInput';
import UserOutput from './userOutput';

var Container = () => {

    const [userName, setUserName] = useState({"value":"Sagar"});

    let handleOnChange = (e) => {
        setUserName({"value": e.target.value})
    }
    return(
        <React.Fragment>
            <UserInput updateUserName={handleOnChange} userName={userName.value} />
            <UserOutput userName={userName.value}/>
        </React.Fragment>
    )
}
export default Container;