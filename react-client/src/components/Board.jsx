import React from 'react';
import Like from './Like.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>THIS IS MAH BOARD</h2>
        <Like/>
        <Like/>
        <Like/>
        <Like/>
      </div>
    );
  }
}

export default Board;
