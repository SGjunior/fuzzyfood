import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserView from './pages/UserView';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      username: null,
      login: true
    }
  }
  render() {
    const { login } = this.state;

    return (
      <div className="App">
      { if (login) {
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            add login
            # => props le username
          </a>
        </header>
        }
      }


        {
          if (!login && this.state.username === "merchant@email.com") {
            // <MerchantView />
          } else if (!login) {
            <UserView username={this.state.username} />
          }
        }
      </div>
    );
  }
}

export default App;
