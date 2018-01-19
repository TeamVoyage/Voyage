import React from 'react';

class AddPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
    };

    this.priceHandler = this.priceHandler.bind(this);
  }

  priceHandler(e) {
    this.setState({
      price: e.target.value,
    }, () => this.onSetPrice());
  }

  onSetPrice() {
    this.props.changeBudget(this.state.price);
  }

  render() {
    return (
      <div className="priceButtons">
        <p className="priceText">
          <label>
            <input className="radioButton" type="radio" name="price" value="1" onClick={this.priceHandler} />$
          </label>
          <label>
            <input className="radioButton" type="radio" name="price" value="2" onClick={this.priceHandler} />$$
          </label>
          <label>
            <input className="radioButton" type="radio" name="price" value="3" onClick={this.priceHandler} />$$$
          </label>
          <label>
            <input className="radioButton" type="radio" name="price" value="4" onClick={this.priceHandler} />$$$$
          </label>
        </p>
      </div>

    );
  }
}

export default AddPrice;
