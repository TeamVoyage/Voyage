import React from 'react';
import Slider from 'react-slick';

class ViewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.info.isSignedIn) {
      this.props.addEventToUser(this.props.event);
    } else {
      alert('Please sign in');
    }
  }

  render() {
    return (
      <div className="center aligned column" key={ this.props.event._id }>
        <div className="ui cards">
          <div className="ui centered card">
            <div className="image" >
              <img src={ this.props.event.image_url.replace('/o.jpg', '/m.jpg')} alt="" />
            </div>
            <div className="content">
              <h4><a href={ this.props.event.url }>{ this.props.event.name }</a></h4>
            </div>
            <center>
              <div className="ui labeled button" tabIndex="0">
                <div className="ui button" onClick={ this.handleClick }>
                  <i className="heart icon"></i>
                  Like
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEntry;
