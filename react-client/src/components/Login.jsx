import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogOutClicked() {
    this.props.handleLogOut();
  }

  render() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <a className='btn float-right' onClick={ this.handleLogOutClicked.bind(this) }>Log out</a>
        </div>
      )
    } else {
      return (
        <div>
          <a className='btn float-right' href="/login/facebook">Log In with Facebook</a>
        </div>
      )
    }
  }
}

export default Login;