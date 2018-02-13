import React from 'react';
import Like from './Like.jsx';

const Board = (props) => {
  return (
    <div className="ui five column doubling stackable masonry grid">
      { props.board.map(event =>
        <Like
          key={ event._id }
          event={ event }
          info={ props.info }
          deleteEventFromUser={ props.deleteEventFromUser }
        />
      )}
    </div>
  );
};

export default Board;

