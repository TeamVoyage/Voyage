import React from 'react';
import ExploreViewListEntry from './ExploreViewListEntry.jsx';

let ExploreView = (props) => {

  return (
    <div>
      <h3>Events</h3>
      {props.events.map(event =>
        <ExploreViewListEntry key={ event.id } event={ event } />
      )}
    </div>
  );
};


export default ExploreView;
