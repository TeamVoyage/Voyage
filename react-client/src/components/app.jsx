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
      userId: '',
      userBoard: [],
      categories: {
        restaurants: [],
        hotels: [],
        events: []
      },
      isSignedIn: false,
      location: ''
    };
    this.go = this.go.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.addEventToUser = this.addEventToUser.bind(this);
  }

  componentDidMount() {
    this.signIn();
    this.getBoard();
  }

  signIn() {
    var that = this;
    $.ajax({
      url: '/checkSession',
      success: function(userId) {
        that.setState({
          isSignedIn: true,
          userId: userId
        });
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

  deleteEventFromUser(eventId) {
    axios.delete('/users/' + this.state.userId + '/events/' + eventId)
      .then(response => {
        console.log('Deleted from user ', response);
        // this.setState({userBoard: response.data});

      })
      .catch(error => {
        console.log('Could not delete ', error);
      });
  }

  getBoard() {
    if (this.state.isSignedIn) {
      axios.get('/users/' + this.state.userId + '/events')
        .then(response => {
          console.log('User board ', response);
          // this.setState({userBoard: response.data});
        })
        .catch(error => {
          console.log('could not retreieve board');
        });
    }
  }

  addEventToUser(event) {
    console.log('APP event: ', event);
    console.log('/users/' + this.state.userId + '/events');

    axios.post('/users/' + this.state.userId + '/events', {
      event: event
    })
      .then(response => {
        console.log('Add to event results ', response);
        // this.setState({userBoard: response.data});
      })
      .catch(error => {
        console.log('Could not add this event', error);
      });
  }

  go(loc) {
    this.setState({
      location: loc
    });

    axios.get('/search', {
      params: {location: loc}
    })
      .then(response => {
        // console.log('Data from server', response);
        this.setState({
          categories: response.data
        });
      })
      .catch(error => {
        console.log('Error, could not search ', error);
      });

  }

  render() {
    console.log('state', this.state);
    return (
      <div>
        <Login handleLogOut={ this.handleLogOut.bind(this) } isSignedIn={ this.state.isSignedIn }/>
        <Switch>
          <RouteProps
            exact path='/'
            component={ Home }
            info={ this.state }
            go={ this.go }
            addEventToUser={ this.addEventToUser }
          />
          <RouteProps path='/user/:id' component={ User } />
        </Switch>
      </div>
    );
  }
}

export default App;

