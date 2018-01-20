import React from 'react';

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.isSignedIn) {
      this.props.addEventToUser(this.props.event);
    } else {
      alert('Please sign in');
    }
  }

  render() {
    return (
      <button type="button" onClick={ this.handleClick }>like</button>
    );
  }
}

export default AddEvent;