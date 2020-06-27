import React from 'react';

var UserOutput = (props) => {

    let paragraphs = [
        props.userName+" example1",
        props.userName+" example2"
    ]
    var paraList = paragraphs.map((paragraph, key) => {
        return <p key={key}>{paragraph}</p>
    })
    return(
        <React.Fragment>{paraList}</React.Fragment>
    )
}
export default UserOutput;