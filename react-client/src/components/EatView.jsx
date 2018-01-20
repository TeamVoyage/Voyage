import React from 'react';
import EatViewListEntry from './EatViewListEntry.jsx';

const EatView = (props) => {
  return (
    <div>
      <h2>Food & Drinks | { props.info.location }</h2>
      {props.info.categories.restaurants.map(restaurant =>
        <EatViewListEntry
          key={ restaurant.id }
          restaurant={ restaurant }
          info={ props.info }
          addEventToUser={ props.addEventToUser }
        />
      )}
    </div>
  );
};

export default EatView;


