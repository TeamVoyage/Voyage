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

        <div className="ui grid">
            <div className="four wide column">
              <div className="ui card">
                  <div className="image">
                    <img src={ this.props.event.image_url.replace('/o.jpg', '/m.jpg')} alt="image"/>
                  </div>
                  <div className="content">
                    <a href={ this.props.event.url } className="header">{ this.props.event.name }</a>

                    <div className="description">
                      Kristy is an art director living in New York.
                    </div>

                    <div className="ui labeled button" tabindex="0">
                      <div className="ui button" onClick={ this.handleClick }>
                        <i className="heart icon"></i> Like
                      </div>
                    </div>
                    
                  </div>
              </div>
            </div>
        </div>

      </div>
    );
  }
}

export default ViewEntry;

