import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import UserView from './pages/UserView';
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      username: null,
      login: true
    }
  }

  render() {
    const login = this.state.login;

    return (
      <div className="App">

      {login ? <Header /> : "to do"}




      </div>
    );
  }
}

export default App;
