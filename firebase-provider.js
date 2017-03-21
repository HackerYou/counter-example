import React from 'react';

import AdjustmentButton from './adjustment-button';

class FirebaseProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {}
    }
  }

  render() {
    return React.cloneElement(this.props.children, {
      data: this.state.value
    })
  }

  componentDidMount() {
    const firebaseRef = firebase.database().ref(this.props.firebaseRef);
    firebaseRef.on('value', snapshot => {
      let val = snapshot.val();
      this.setState({ data: snapshot.val() });
    });
  }
}

export default FirebaseProvider;
