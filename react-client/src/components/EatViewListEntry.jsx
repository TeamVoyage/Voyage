import React from 'react';
import AddEvent from './AddEvent.jsx';

class EatViewListEntry extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e) {
  //   if (this.props.info.isSignedIn) {
  //     this.props.addEventToUser(this.props.restaurant);
  //   } else {
  //     alert('Please sign in');
  //   }
  // }

  render() {
    return (
      <div key={ this.props.restaurant.id }>
        <h4><a href={ this.props.restaurant.url }>{this.props.restaurant.name }</a></h4>
        <img src={this.props.restaurant.image_url.replace('/o.jpg', '/m.jpg')} alt="" />
        <AddEvent
          event={ this.props.restaurant }
          isSignedIn={ this.props.info.isSignedIn }
          addEventToUser={ this.props.addEventToUser }
        />
      </div>
    );
  }
}

export default EatViewListEntry;



        // <button type="button" onClick={ this.handleClick }>like</button>
