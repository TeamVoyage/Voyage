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
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="./img/doge.jpg" width="28" height="28" alt="logo" className="d-inline-block align-top" />
            Voyage
          </a>
          <div>
            { this.displayStatus() }
          </div>
        </nav>
      </div>
    );
  }
}

export default Login;