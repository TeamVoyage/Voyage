import React from 'react';
import { Route, Link } from 'react-router-dom';
import SearchLocation from './SearchLocation.jsx';
import Results from './Results.jsx';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('HOME PROPS: ', this.props);
    return (
      <div>
        <SearchLocation go={ this.props.go }/>
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

