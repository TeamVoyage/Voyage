import React from 'react';
import RouteProps from 'react-route-props';
import { Route, Switch, indexRoute } from 'react-router-dom';
import AppHeader from './AppHeader.jsx';
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
      events: [],
      isSignedIn: false,
      location: ''
    };
  }

  go() {
    axios.post('/explore', {
      location: this.state.location,
      price: this.state.price,
    })
      .then(response => {
        console.log('explore data from server', response);
        this.getExploreData(response.data);
      })
      .catch(error => {
        console.log('error..!!', error);
      });
  }

  render() {

    return (
      <div>
        <AppHeader />
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

