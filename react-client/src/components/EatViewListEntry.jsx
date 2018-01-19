import React from 'react';

let EatViewListEntry = (props) => {
  return (
    <div key={ props.restaurant.id }>
      <h4><a href={ props.restaurant.url }>{ props.restaurant.name }</a></h4>
      <img src={props.restaurant.image_url.replace('/o.jpg', '/m.jpg')} alt="" />
      <button type="button">like</button>
    </div>
  );
};

export default EatViewListEntry;




