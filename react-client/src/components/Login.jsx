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
          </div>
        </div>
      </div>
    );
  }
}

export default Login;