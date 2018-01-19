import React from 'react';

let SleepViewListEntry = (props) => {
  return (
    <div key={ props.hotel.id }>
      <h4><a href={ props.hotel.url }>{ props.hotel.name }</a></h4>
      <img src={props.hotel.imageUrl.replace('/o.jpg', '/m.jpg')} alt="" />
      <button type="button">like</button>
    </div>
  );
};

export default SleepViewListEntry;
