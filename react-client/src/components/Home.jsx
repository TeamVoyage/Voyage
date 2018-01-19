import React from 'react';
import { Route, Link } from 'react-router-dom';
import SearchLocation from './SearchLocation.jsx';
import Results from './Results.jsx';
// import Board from './Board.jsx';  // uncomment when created


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  // Only render results if search location provided
  displaySearch() {
    let display = null;
    if (this.props.info.location) {
      display =
        <div>
          <hr/>
          <Results info={ this.props.info } />
          <hr/>
        </div>;
    }
    return display;
  }

  // If User logged in, render Board component
  displayBoard() {
    let display = null;
    if (this.props.info.isLoggedIn) {
      display =
        <div>
          <Board />
        </div>;
    }
    return display;
  }

  render() {
    return (
      <div>
        <SearchLocation go={ this.props.go }/>
        { this.displaySearch() }
        { this.displayBoard() }
      </div>
    );
  }
}

export default Home;
