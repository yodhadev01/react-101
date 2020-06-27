import React from 'react';
import './style.css'
var ListComponent = (props) => {
    return(
        <React.Fragment>
            <h1 className={"border"} key={props.uuid} onClick={() => props.clickHandler(parseInt(props.uuid))} >{props.value}</h1>
        </React.Fragment>
    )
}
export default ListComponent;