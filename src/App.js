import React, { Component } from 'react';
import { adalApiFetch } from './adalConfig';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  async componentDidMount() {
    console.log('1');
    console.log(await adalApiFetch(fetch,"https://lsc-api.azurewebsites.net/api/HttpTrigger1?code=ucdxut6aNHdzEbe9UZqfxhZr/LLl/JIvArF1KOuGHpt9nrfFhiFOGQ=="));
    console.log('2');
  }

  render() {
    return (
      <div className="App">
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
          </a>
        </header>
      </div>
    );
  }
}

export default App;
