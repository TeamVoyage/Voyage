import React from 'react';

let EatViewListEntry = (props) => {
  return (
    <div key={ props.restaurant.id }>
      <h1><a href={ props.restaurant.url }>{ props.restaurant.name }</a></h1>
      <p>{ props.restaurant.location }</p>
      <img src={props.restaurant.imageUrl.replace('/o.jpg', '/m.jpg')} alt="" />
    </div>
  );
};

export default EatViewListEntry;



