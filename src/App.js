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
    const username =  document.getElementById("name").value;

    this.setState({
        login: !this.state.login,
        username: username,
        page: "home"
      })

  }

  changePage = (page) => {
    this.setState({
      page: page
    })
  }

  render() {
    const { login, username } = this.state;

    return (
      <div className="app-container">

        {login ? <LoginForm onSubmit={this.handleSubmit} /> : <Header />}

        { !login && username === "merchant@email.com" ? <MerchantView /> : <UserView changePage={this.changePage} username={username} />}


      </div>
    );
  }
}

export default App;

// {login ? <LoginForm onSubmit={this.handleSubmit} /> : <Header />}
