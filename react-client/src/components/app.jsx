import React from 'react';
import RouteProps from 'react-route-props';
import { Route, Switch, indexRoute } from 'react-router-dom';
import axios from 'axios';
import Home from './Home.jsx';
import Login from './Login.jsx';
import User from './User.jsx';
import $ from 'jquery';

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
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    this.signIn();
  }

  signIn() {
    var that = this;
    $.ajax({
      url: '/checkSession',
      success: function(isSignedIn) {
        that.setState({ isSignedIn: isSignedIn });
      },
      error: function() {
        console.log('check access token error');
      }
    });
  }

  handleLogOut() {
    this.logOut();
  }

  logOut() {
    var that = this;
    $.ajax({
      url: '/logOut',
      success: function(isSignedIn) {
        that.setState({ isSignedIn: isSignedIn });
      },
      error: function() {
        console.log('logout error');
      }
    });
  }

  go(loc) {
    this.setState({
      location: loc
    });

    axios.post('/eat', {
      location: loc
    })
      .then(response => {
        console.log('eat data from server', response);
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
        console.log('sleep data from server', response);
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

    axios.post('/party', {
      location: loc
    })
      .then(response => {
        console.log('party data from server', response);
        this.setState({
          events: this.state.events.concat(response.data)
        });
      })
      .catch(error => {
        console.log('error..!!', error);
      });
  }

  render() {
    console.log('this.state: ', JSON.stringify(this.state, null, 2));
    return (
      <div>
        <Login handleLogOut={ this.handleLogOut.bind(this) } isSignedIn={ this.state.isSignedIn }/>
        <Switch>
          <RouteProps exact path='/' component={ Home } info={ this.state } go={ this.go }/>
          <RouteProps path='/user/:id' component={ User } />
        </Switch>
      </div>
    );
  }
}

export default App;

