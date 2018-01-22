import React from 'react';
import ViewEntry from './ViewEntry.jsx';

let View = (props) => {
  return (
    <div className="ui six column doubling stackable masonry grid">
      { props.category.map(event =>
        <ViewEntry
          key={ event.id }
          event={ event }
          info={ props.info }
          addEventToUser={ props.addEventToUser }
          deleteEventFromUser={ props.deleteEventFromUser }
        />
      )}
    </div>
  );
};

export default View;
