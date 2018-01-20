import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.info.isSignedIn) {
      this.props.deleteEventFromUser(this.props.event.id);
    } else {
      alert('Please sign in');
    }
  }

  render() {
    console.log('props', this.props);
    return (
      <div key={ this.props.event.id }>
        <h4><a href={ this.props.event.url }>{ this.props.event.name }</a></h4>
        <img src={ this.props.event.image_url.replace('/o.jpg', '/m.jpg')} alt="" />
        <button type="button" onClick={ this.handleClick }>like</button>
      </div>
    );
  }
}

export default Like;