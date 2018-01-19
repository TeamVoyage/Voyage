import React from 'react';
import ExploreViewListEntry from './ExploreViewListEntry.jsx';

let ExploreView = (props) => {

  return (
    <div>
      <h2>Events | { props.info.location }</h2>
      {props.info.categories.events.map(event =>
        <ExploreViewListEntry key={ event.id } event={ event } location={ props.info.location }/>
      )}
    </div>
  );
};


export default ExploreView;
