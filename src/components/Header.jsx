import React from 'react';
import logo from '../images/mini-logo.svg';
import menu from "../images/menu.svg"

class Header extends React.Component {
  render() {
    return(
      <header className="main-header">

      <div className="left-column logo">
          <img src={logo} className="fuzzyfood-logo" alt="logo" />
      </div>

      <div className="right-column navbar">

        <img src={menu} alt=""/>

      </div>

      </header>
    )
  }
}

export default Header;
