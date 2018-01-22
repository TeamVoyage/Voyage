import React from 'react';
import ViewEntry from './ViewEntry.jsx';

const View = (props) => {
  return (
    <div className="ui stackable grid">
      {props.category.map(event =>
        <ViewEntry
          key={ event.id }
          event={ event }
          info={ props.info }
          addEventToUser={ props.addEventToUser }
        />
      )}
    </div>
  );
};

export default View;
