import React, {useContext} from 'react';
import AuthContext from './contextContainer'

function InnerMost() {
    const authContext = useContext(AuthContext);
    console.log(authContext.auth)
  return (
    <h1>{authContext.auth}</h1>
  );
}

export default InnerMost;

//CLASS EXAMLE BELOW

// import React from 'react';
// import AuthContext from './contextContainer'

// class InnerMost extends React.Component {
//     static contextType = AuthContext;
//     render(){
//         console.log(this.context.auth);
//         return (
//             <h1>{this.context.auth}</h1>
//         )
//     }

// }

// export default InnerMost;
