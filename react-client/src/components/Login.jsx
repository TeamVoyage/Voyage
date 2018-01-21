import React from 'react';

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
        <span>Logged in as: { this.props.name } &nbsp;&nbsp;</span>
        <a
          className='ui teal button'
          onClick={ this.handleLogOutClicked.bind(this) }
        >
        Log out
        </a>
      </div>
    );

    if (!this.props.isSignedIn) {
      status = (
        <div>
          <a
            className='ui teal button'
            href="/login/facebook"
          >
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
          </div>
        </div>
      </div>
    );
  }
}

export default Login;