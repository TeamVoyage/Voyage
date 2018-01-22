import React from 'react';
import Slider from 'react-slick';

class ViewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      liked: false
    }
  }

  handleClick(e) {
    if (this.props.info.isSignedIn) {
      if (this.state.liked) {
        this.props.deleteEventFromUser(this.props.event);
      } else {
        this.props.addEventToUser(this.props.event);
      }
      this.setState({ liked: !this.state.liked })
    } else {
      alert('Please sign in');
    }
  }

  getLikeText(liked) {
    return liked ? 'Unlike' : 'Like' ;
  }

  render() {
    return (
      <div className="center aligned column" key={ this.props.event._id }>
        <div className="ui cards">
          <div className="ui centered card">
            <div className="image" >
              <img className="" src={ this.props.event.image_url } alt="" />
            </div>
            <div className="content">
              <h4><a href={ this.props.event.url } target="_blank">{ this.props.event.name }</a></h4>
            </div>
            <center>
              <div className="ui labeled button" tabIndex="0">
                <div className="ui button" onClick={ this.handleClick }>
                  <i className="heart icon"></i>
                  { this.getLikeText(this.state.liked) }
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
