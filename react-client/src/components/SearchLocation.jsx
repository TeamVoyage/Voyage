import React from 'react';

class SearchLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSetDestination = this.onSetDestination.bind(this);
    this.handleReturnKey = this.handleReturnKey.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  handleReturnKey(e) {
    if (e.key === 'Enter') {
      this.props.changeLoc(this.state.location);
      this.props.searchLocation(this.state.location);
    }
  }

  onSetDestination() {
    this.props.changeLoc(this.state.location);
  }

  // onBlur acts as a redundancy to onKeyPress
  // in case user forgets/doesn't know to press "Enter"

  render() {
    return (
      <div className="search-bar destination">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          placeholder="I want to go to..."
          onChange={this.handleInputChange}
          onKeyPress={this.handleReturnKey}
          onBlur={this.onSetDestination}
        />
      </div>
    );
  }
}

export default SearchLocation;
