import React from 'react';
import SleepViewListEntry from './SleepViewListEntry.jsx';

let SleepView = (props) => {

  return (
    <div>
      <h2>Accommodations | { props.info.location }</h2>
      {props.info.hotels.map(hotel =>
        <SleepViewListEntry key={ hotel.id } hotel={ hotel } location={ props.info.location }/>
      )}
    </div>
  );
};


export default SleepView;
