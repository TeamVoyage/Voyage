import React from 'react';

let EatViewListEntry = (props) => {
  return (
    <div key={ props.restaurant.id }>
      <h1><a href={ props.restaurant.url }>{ props.restaurant.name }</a></h1>
      <img src={props.restaurant.imageUrl.replace('/o.jpg', '/m.jpg')} alt="" />
      <button type="button">like</button>
    </div>
  );
};

export default EatViewListEntry;




