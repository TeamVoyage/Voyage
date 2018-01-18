import React from 'react';
import RouteProps from 'react-route-props';
import { Route, Switch, indexRoute } from 'react-router-dom';
import Header from './header.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import User from './User.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      restaurants: [
        {
          name: 'Cossetta\'s',
          location: 'St. Paul, MN',
          id: 1,
          url: 'www.something.com',
          imageUrl: ''
        }
      ],
      hotels: [],
      events: []
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <RouteProps exact path='/' component={ Home } categories={ this.state } />
          <RouteProps path='/login' component={ Login } />
          <RouteProps path='/user/:id' component={ User } />
        </Switch>
      </div>
    );
  }
}

export default App;

