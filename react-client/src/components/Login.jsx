import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogOutClicked() {
    this.props.handleLogOut();
  }

  displayStatus() {
    let status =
      <a
        className='btn float-right'
        onClick={ this.handleLogOutClicked.bind(this) }
      >
      Log out
      </a>;

    if (!this.props.isSignedIn) {
      status =
        <a
          className='btn float-right'
          href="/login/facebook"
        >
        Log In with Facebook
        </a>;
    }
    return status;
  }

  render() {
    return (
      <div>
        <div className="ui tabular menu">
          <div className="right menu">
          <div className="item">
            <div className="ui teal button">
              { this.displayStatus() }
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;