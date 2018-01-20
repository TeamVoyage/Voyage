import React from 'react';

class EatViewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('e', e);
  }

  render() {
    console.log('Eat Entry props: ', this.props);
    return (
      <div key={ this.props.restaurant.id }>
        <h4><a href={ this.props.restaurant.url }>{ this.props.restaurant.name }</a></h4>
        <img src={this.props.restaurant.image_url.replace('/o.jpg', '/m.jpg')} alt="" />
        <button type="button" onClick={ this.handleClick }>like</button>
      </div>
    );
  }
}

export default EatViewListEntry;




