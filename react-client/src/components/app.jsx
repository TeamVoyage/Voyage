import React from 'react';
import RouteProps from 'react-route-props';
import { Route, Switch, indexRoute } from 'react-router-dom';
import axios from 'axios';
import AppHeader from './AppHeader.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import User from './User.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      restaurants: [],
      hotels: [],
      events: [],
      isSignedIn: false,
      location: ''
    };
    this.go = this.go.bind(this);
  }

  go(loc) {
    this.setState({
      location: loc
    });

    axios.post('/eat', {
      location: loc
    })
      .then(response => {
        console.log('explore data from server', response);
        this.setState({
          restaurants: response.data
        });
      })
      .catch(error => {
        console.log('error..!!', error);
      });

    axios.post('/sleep', {
      location: loc
    })
      .then(response => {
        console.log('explore data from server', response);
        this.setState({
          hotels: response.data
        });
      })
      .catch(error => {
        console.log('error..!!', error);
      });

    axios.post('/explore', {
      location: loc
    })
      .then(response => {
        console.log('explore data from server', response);
        this.setState({
          events: response.data
        });
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
          <RouteProps exact path='/' component={ Home } info={ this.state } go={ this.go }/>
          <RouteProps path='/login' component={ Login } />
          <RouteProps path='/user/:id' component={ User } />
        </Switch>
      </div>
    );
  }
}

export default App;

