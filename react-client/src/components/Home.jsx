import React from 'react';
import { Route, Link } from 'react-router-dom';
import SearchLocation from './SearchLocation.jsx';
import Results from './Results.jsx';


class Home extends React.Component {
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
    console.log('input data', this.state.location);
    console.log('input data', this.state.location);
  }

  handleReturnKey(e) {
    if (e.key === 'Enter') {
      this.props.changeLoc(this.state.location);
      this.props.searchLocation(this.state.location);
      console.log('return key function', this.state.location);
    }
  }

  // Not used in current iteration
  // Was initially left in case we decided to add a submit button for the location
  handleClick(e) {
    e.preventDefault();
    this.props.searchLocation(this.target.name);
  }


  onSetDestination() {
    this.props.changeLoc(this.state.location);
  }

  // onBlur acts as a redundancy to onKeyPress
  // in case user forgets/doesn't know to press "Enter"

  render() {
    return (
      <div>
        <SearchLocation />
        <hr/>

        <Results
          restaurants={ this.props.categories.restaurants }
          hotels={ this.props.categories.hotels }
          events={ this.props.categories.events }
        />
      </div>
    );
  }
}

export default Home;

