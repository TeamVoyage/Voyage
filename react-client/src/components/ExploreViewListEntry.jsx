import React from 'react';

let ExploreViewListEntry = (props) => {
  return (
    <div key={ props.event.id }>
      <h3><a href={ props.event.url }>{ props.event.name }</a></h3>
      <p>{ props.event.location }</p>
      <img src={props.event.imageUrl.replace('/o.jpg', '/m.jpg')} alt="" />
    </div>
  );
};

export default ExploreViewListEntry;
