import React from 'react';
import logo from '../images/mini-logo.svg';

class Header extends React.Component {
  render() {
    return(
      <header className="main-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          add login
          # => props le username
        </a>
      </header>
    )
  }
}

export default Header;
