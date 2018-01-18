import React from 'react';
import EatViewListEntry from './EatViewListEntry.jsx';

const EatView = (props) => {
  return (
    <div className="viewTable">
      <h3>Good Eats</h3>
      {props.restaurants.map(restaurant =>
        <EatViewListEntry key={restaurant.id} restaurant={restaurant} />
      )}
    </div>
  );
};


export default EatView;

