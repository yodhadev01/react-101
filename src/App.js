import React, {Component, PureComponent} from 'react';


class App extends Component{
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    };
  }

  /*
  getDerivedStateFromProps is invoked right before calling the render method,
  both on the initial mount and on subsequent updates. It should return an 
  object to update the state, or null to update nothing.(rare to use)
  */
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[App.js] getDerivedStateFromProps', props);
  //   return state;
  // }

  //it runs before mounting component(once)
  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  //it runs after mounting a component(once)
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  /* it run before render and return Boolean (everytime)
  if u use PureComponent in place of Component in extent of this class so react will
  so react will automaticaly implement shouldComponentUpdate and check nextProps with
  this.props and if found any value differ then only it will allow to render class 
  */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  // run after every render
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  /*
  getSnapshotBeforeUpdate() is invoked right before the most recently rendered output
  is committed to e.g. the DOM. It enables your component to capture some information
  from the DOM (e.g. scroll position) before it is potentially changed. Any value
  returned by this lifecycle will be passed as a parameter to componentDidUpdate().
  */
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('[Persons.js] getSnapshotBeforeUpdate');
  //   return { message: 'Snapshot!' };
  // }

  //Using this lifecycle method often leads to bugs and inconsistencies
  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }


  render() {
    console.log('[App.js] render');

    return (
      <h1>Hello!!</h1>
    );
  }
}

export default App;
