import React from 'react';
import './styles/index.scss';
import UserView from './pages/UserView';
import MerchantView from './pages/UserView';
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
    const { login, username } = this.state;

    return (
      <div className="App">

      {login ? <Header /> : <Header />}

      { !login && username === "merchant@email.com" ? <MerchantView /> : <UserView username={this.state.username} />}


      </div>
    );
  }
}

export default App;
