import React from 'react';
import Like from './Like.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui four column grid">
        {this.props.board.map(event =>
          <Like
            key={ event._id }
            event={ event }
            info={ this.props.info }
            deleteEventFromUser={ this.props.deleteEventFromUser }
          />
        )}
      </div>
    );
  }
}

export default Board;

