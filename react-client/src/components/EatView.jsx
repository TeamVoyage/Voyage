import React from 'react';
import EatViewListEntry from './EatViewListEntry.jsx';

const EatView = (props) => {
  return (
    <div>
      <h2>Restaurants | { props.info.location }</h2>
      {props.info.categories.restaurants.map(restaurant =>
        <EatViewListEntry key={ restaurant.id } restaurant={ restaurant } location={ props.info.location }/>
      )}
    </div>
  );
};

export default EatView;

