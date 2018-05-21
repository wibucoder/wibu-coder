import React, { Component } from 'react';
import './App.css';

const Intro = (props) => (
        <p className="App-intro">
          First function wibu coder. Wibu juga harus bisa coding.
        </p>
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wibu Coder</h1>
        </header>
        <Intro />
      </div>
    );
  }
}

export default App;
