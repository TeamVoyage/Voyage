import React from 'react';

let SleepViewListEntry = (props) => {
  return (
    <div key={ props.hotel.id }>
      <h3><a href={ props.hotel.url }>{ props.hotel.name }</a></h3>
      <p>{ props.hotel.location }</p>
      <img src={props.hotel.imageUrl.replace('/o.jpg', '/m.jpg')} alt="" />
    </div>
  );
};

export default SleepViewListEntry;
