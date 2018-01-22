import React from 'react';
import RouteProps from 'react-route-props';
import { Route, Switch, indexRoute } from 'react-router-dom';
import axios from 'axios';
import Login from './Login.jsx';
import SearchLocation from './SearchLocation.jsx';
import Results from './Results.jsx';
import View from './View.jsx';
import Board from './Board.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      name: [],
      userBoard: [],
      categories: {
        restaurants: [],
        hotels: [],
        events: []
      },
      isSignedIn: false,
      location: '',
      show: {
        eat: true,
        sleep: true,
        do: true
      }
    };
    this.go = this.go.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.addEventToUser = this.addEventToUser.bind(this);
    this.deleteEventFromUser = this.deleteEventFromUser.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidMount() {
    this.checkSession();
  }

  checkSession() {
    var that = this;
    $.ajax({
      url: '/checkSession',
      success: function(response) {
        if (response.userId) {
          that.setState({
            isSignedIn: true,
            userId: response.userId,
            name: response.name
          });
          that.getBoard(response.userId);
        } else {
          that.setState({
            isSignedIn: false,
            userId: '',
            name: ''
          });
        }
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
        that.setState({ isSignedIn: false });
      },
      error: function() {
        console.log('logout error');
      }
    });
  }

  deleteEventFromUser(eventId) {
    var that = this;
    axios.delete('/users/' + this.state.userId + '/events/' + eventId)
      .then(response => {
        that.setState({userBoard: response.data});

      })
      .catch(error => {
        console.log('Could not delete ', error);
      });
  }

  getBoard(userId) {
    axios.get('/users/' + userId + '/events')
      .then(response => {
        this.setState({ userBoard: response.data });
      })
      .catch(error => {
        console.log('could not retreieve board');
      });
  }

  addEventToUser(event) {
    axios.post('/users/' + this.state.userId + '/events', {
      event: event
    })
      .then(response => {
        console.log('Add to event results ', response.data);
        this.setState({ userBoard: response.data });
      })
      .catch(error => {
        console.log('Could not add this event', error);
      });
  }

  clearSearch() {
    this.setState({
      categories: {
        restaurants: [],
        hotels: [],
        events: []
      },
      location: ''
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
        this.setState({
          categories: response.data
        });
      })
      .catch(error => {
        console.log('Error, could not search ', error);
      });
  }

  displaySearch() {
    let display = <div></div>;
    if (this.state.location ||
        (this.state.categories.restaurants.length !== 0 ||
         this.state.categories.hotels.length !== 0 ||
         this.state.categories.events.length !== 0)) {
      display =
        <div>
          <Results
            info={ this.state }
            addEventToUser={ this.addEventToUser }
            show={ this.state.show }
          />
        </div>;
    }
    return display;
  }

  displayBoard() {
    let display =
      <div className="ui middle aligned segment">

        <h1>Please sign in to see your board!</h1>
      </div>;

    if (this.state.isSignedIn && this.state.userBoard.length !== 0) {
      display =
        <div className="ui middle aligned stackable raised segment">
          <h2>My Board</h2>
          <Board
            info={ this.state }
            board={ this.state.userBoard }
            deleteEventFromUser={ this.deleteEventFromUser }/>
        </div>;
    } else if (this.state.isSignedIn && this.state.userBoard.length === 0) {
      display =
        <div className="ui middle aligned segment">
          <h1>Your board is empty</h1>
        </div>;
    }
    return display;
  }

  handleFilterClicked(showEat, showSleep, showDo) {
    this.setState({
      show: {
        eat: showEat,
        sleep: showSleep,
        do: showDo
      }
    });
  }

  render() {
    console.log('state', this.state);
    return (
      <div>
        <Login
          handleLogOut={ this.handleLogOut.bind(this) }
          isSignedIn={ this.state.isSignedIn }
          name={ this.state.name }
        />
        <SearchLocation
          go={ this.go }
          handleFilterClick={ this.handleFilterClicked.bind(this) }
          show={ this.state.show }
          clearSearch={ this.clearSearch }
        />

        { this.displaySearch() }

        { this.displayBoard() }

      </div>
    );
  }
}

export default App;

