import React from 'react';
import Like from './Like.jsx';

const Board = (props) => {
  return (
    <div>
      {props.category.map(event =>
        <Like
          key={ event.id }
          event={ event }
          info={ props.info }
          deleteEventFromUser={ props.deleteEventFromUser }
        />
      )}
    </div>
  );
};

export default Board;
