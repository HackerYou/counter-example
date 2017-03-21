import React from 'react';
import firebase from 'firebase';

import AdjustmentButton from './adjustment-button'

class Counter extends React.Component {
  render() {
    return <div>
      <div>Counter: { this.props.counter }</div>
      <AdjustmentButton setTo={ this.props.counter + 1 } firebaseKey={ this.props.firebaseKey }>
        Add One
      </AdjustmentButton>
      <AdjustmentButton setTo={ this.props.counter - 1 } firebaseKey={ this.props.firebaseKey }>
        Subtract One
      </AdjustmentButton>
      <AdjustmentButton setTo={ this.props.counter * 2 } firebaseKey={ this.props.firebaseKey }>
        Double
      </AdjustmentButton>
      <AdjustmentButton setTo={ 0 } firebaseKey={ this.props.firebaseKey }>
        Reset
      </AdjustmentButton>
    </div>
  }
}

export default Counter;
