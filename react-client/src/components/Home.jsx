import React from 'react';
import { Route, Link } from 'react-router-dom';
import SearchLocation from './SearchLocation.jsx';
import Results from './Results.jsx';
// import Board from './Board.jsx';  // uncomment when created


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('HOME PROPS: ', this.props);

    let displayBoard = null;

    // If user logged in, render <Board /> component
    if (this.props.info.isLoggedIn) {
      displayBoard = <Board />;
    } else {
      displayBoard = null;
    }
    return (
      <div>
        <SearchLocation go={ this.props.go }/>
        <hr/>
        <Results
          info={ this.props.info }
          // restaurants={ this.props.categories.restaurants }
          hotels={ this.props.info.hotels }
          events={ this.props.info.events }
          // location={ this.props.categories.location }
        />
        <hr/>
        { displayBoard }
      </div>
    );
  }
}

export default Home;

