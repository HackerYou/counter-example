import ReactDOM  from 'react-dom';
import React from 'react';
import firebase from 'firebase';
import fetch from 'isomorphic-fetch';

import './database';

import Counter from './counter';

class App extends React.Component {
  constructor() {
    super();
    this.state = { counter1: 0, counter2: 0 }
  }

  render() {
    return <div>
      <Counter counter={ this.state.counter1 } firebaseKey="counter1" />
      <Counter counter={ this.state.counter2 } firebaseKey="counter2" />
    </div>
  }

  componentDidMount() {
    const firebaseRef = firebase.database().ref();
    firebaseRef.on('value', snapshot => {
      this.setState(snapshot.val());
    });
  }
}

ReactDOM.render(<App />, document.getElementById('placeholder'));
