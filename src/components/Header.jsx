import React from 'react';
import logo from '../images/mini-logo.svg';

class Header extends React.Component {
  render() {
    return(
      <header className="main-header">

      <div className="leftcolum logo">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="fuzzyfood-logo" alt="logo" />
        </a>
      </div>

      <div className="right-column navbar">

      menu

      </div>

      </header>
    )
  }
}

export default Header;
