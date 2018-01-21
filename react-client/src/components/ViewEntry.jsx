import React from 'react';

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
    console.log('props', this.props);
    return (
      <div key={ this.props.event.id }>
        <h4><a href={ this.props.event.url }>{ this.props.event.name }</a></h4>
        <img src={ this.props.event.image_url.replace('/o.jpg', '/m.jpg')} alt="" />
        <button type="button" onClick={ this.handleClick }>like</button> */}

        <div className="four column">
            <div className="column">
              <div className="ui card">
                  <div className="image">
                    <img src={ this.props.event.image_url.replace('/o.jpg', '/m.jpg')} alt="image"/>
                  </div>
                  <div className="content">
                    <a href={ this.props.event.url } className="header">{ this.props.event.name }</a>

                    <div className="description">
                      Kristy is an art director living in New York.
                    </div>

                    <button className="ui button">
                      Follow
                    </button>

                    <div className="ui labeled button" tabindex="0">
                      <div className="ui button">
                        <i className="heart icon"></i> Like
                      </div>
                    </div>

                    <button type="button" onClick={ this.handleClick }>like</button>
                    
                  </div>
              </div>
            </div>
        </div>

      </div>
    );
  }
}

export default ViewEntry;

