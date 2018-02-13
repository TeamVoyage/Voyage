import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { goToAnchor } from 'react-scrollable-anchor';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogOutClicked() {
    this.props.handleLogOut();
  }

  displayStatus() {
    let status = (
      <div>
        <span>Hi, { this.props.name } &nbsp;&nbsp;</span>
        <button
          className='ui teal labeled icon button'
          onClick={ this.handleLogOutClicked.bind(this) }
        ><i className="star icon"></i>
        Log out
        </button>
      </div>
    );

    if (!this.props.isSignedIn) {
      status = (
        <div>
          <a
            className='ui teal labeled icon button' href="/login/facebook"><i className="empty star icon"></i>
            Log In with Facebook
          </a>
        </div>
      );
    }
    return status;
  }

  render() {
    return (
      <div>
        <div className="ui tabular menu">
          <div className="right menu">
            { this.displayStatus() }
            <div className="ui teal basic button" onClick={function() { goToAnchor('myBoard'); }}>my board</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;