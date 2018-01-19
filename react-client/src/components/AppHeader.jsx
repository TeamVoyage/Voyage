import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.jsx';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log('from AppHeader.jsx');

    return (
      <div id="appHeader">
        <p>Logo</p>
        <p>Search Area</p>
        <Login handleLogOut={ this.props.handleLogOut } isSignedIn={ this.props.isSignedIn } />
        <p>Team</p>
      </div>
    );
  }
}

export default AppHeader;