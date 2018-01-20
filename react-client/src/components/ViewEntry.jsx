import React from 'react';
import AddEvent from './AddEvent.jsx';

class ViewEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4><a href={ this.props.event.url }>{this.props.event.name }</a></h4>
        <img src={this.props.event.image_url.replace('/o.jpg', '/m.jpg')} alt="" />
        <AddEvent
          event={ this.props.event }
          isSignedIn={ this.props.info.isSignedIn }
          addEventToUser={ this.props.addEventToUser }
        />
      </div>
    );
  }
}

export default ViewEntry;
