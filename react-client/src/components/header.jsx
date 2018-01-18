import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login.jsx';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;