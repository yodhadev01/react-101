import React, {useState} from 'react';
import ListComponent from './listComponent';

var MainContainer = () => {
    const [value, setValue] = useState("test");

    let onChangeHandler = (e) => {
        setValue(e.target.value)
    }

    var onClickHandler = (id) => {
        let listArr = value.split('');
        listArr.splice(id, 1);
        setValue(listArr.join(''));    
    }

    let listArr = value.split('');
    let list = listArr.map((value, key) => {
        return <ListComponent clickHandler={onClickHandler} value={value} uuid={key}/>
    }) 

    return(
        <React.Fragment>
            <input onChange={onChangeHandler} value={value}/>
            {list}
        </React.Fragment>
    )
}
export default MainContainer;