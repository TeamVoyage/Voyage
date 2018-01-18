import React from 'react';

let EatViewListEntry = (props) => {
  return (
    <div key={ props.restaurant.id }>
      <h3><a href={ props.restaurant.url }>{ props.restaurant.name }</a></h3>
      <p>{ props.restaurant.location }</p>
      <img src={props.restaurant.imageUrl.replace('/o.jpg', '/m.jpg')} alt="" />
    </div>
  );
};

export default EatViewListEntry;


//   return (
//     <tr>
//       <td> <a href={ props.restaurant.url }><h3>{ props.restaurant.name }</h3></a> </td>
//       <td> <img src={props.item.imageUrl.replace('/o.jpg', '/m.jpg')} alt="" /> </td>
//     </tr>
//   );
// };

