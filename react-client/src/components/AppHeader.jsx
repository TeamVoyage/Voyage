import React from 'react';
import ReactDOM from 'react-dom';

class AppHeader extends React.Component {

  render() {
    
    console.log('from appHeader.jsx');

    return (
      <div id="appHeader">
        <p>Logo</p>
        <p>Search Area</p>
        <p>Login</p>
        <p>Team</p>
      </div>
    )
  }
}

export default AppHeader;