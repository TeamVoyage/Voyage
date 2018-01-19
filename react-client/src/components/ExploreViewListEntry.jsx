import React from 'react';

let ExploreViewListEntry = (props) => {
  return (
    <div key={ props.event.id }>
      <h4><a href={ props.event.url }>{ props.event.name }</a></h4>
      <img src={props.event.imageUrl.replace('/o.jpg', '/m.jpg')} alt="" />
      <button type="button">like</button>
    </div>
  );
};

export default ExploreViewListEntry;
