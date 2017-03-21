import React from 'react';
import firebase from 'firebase';

import './database';

class AdjustmentButton extends React.Component {
  constructor() {
    super();
    this.adjust = this.adjust.bind(this);
  }

  render() {
    return <div>
      <button onClick={ () => this.adjust() }>{ this.props.children }</button>
    </div>
  }

  adjust() {
    var newCount = this.props.setTo;
    const firebaseRef = firebase.database().ref(this.props.firebaseKey);
    firebaseRef.set(this.props.setTo);
  }
}

export default AdjustmentButton;
