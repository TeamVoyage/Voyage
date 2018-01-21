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
    return (
      <div className="column">
        <div className="center aligned row" key={ this.props.event._id }>
          <div className="ui card">
            <div className="image">
              <img src={ this.props.event.image_url.replace('/o.jpg', '/m.jpg')} alt="" />
            </div>
            <div className="content">
              <h4><a href={ this.props.event.url }>{ this.props.event.name }</a></h4>
            </div>
            <div className="ui labeled button" tabIndex="0">
              <div className="ui button" onClick={ this.handleClick }>Unlike</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Like;

