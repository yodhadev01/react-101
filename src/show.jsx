import React from 'react';
import PropTypes from 'prop-types';
var Shower = (props) => {

    return(
        <h1>Hello!!</h1>
    )    
}

Shower.propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}
export default Shower;