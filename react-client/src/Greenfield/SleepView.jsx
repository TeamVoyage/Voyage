import React from 'react';
import SleepViewListEntry from './SleepViewListEntry.jsx';

let SleepView = (props) => {

  return (
    <div>
      <h3>Accommodations</h3>
      {props.hotels.map(hotel =>
        <SleepViewListEntry key={hotel.id} hotel={hotel} />
      )}
    </div>
  );
};


export default SleepView;
