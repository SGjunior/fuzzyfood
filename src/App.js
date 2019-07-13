import React from 'react';
import './styles/index.scss';
import UserView from './pages/UserView';
import MerchantView from './pages/UserView';
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      login: true
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("wedf" + document.getElementById("name").value)
    const username =  document.getElementById("name").value;

    this.setState({
        login: !this.state.login,
        username: username
      })

  }

  render() {
    const { login, username } = this.state;

    return (
      <div className="App">


      { /* login ? <Header /> : "to do" */ }

        {login ? <LoginForm onSubmit={this.handleSubmit} /> : <Header />}

        { !login && username === "merchant@email.com" ? <MerchantView /> : <UserView username={username} />}

      </div>
    );
  }
}

export default App;

// {login ? <LoginForm onSubmit={this.handleSubmit} /> : <Header />}
