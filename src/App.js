import React, { Component } from 'react';
import Intro from './component/Intro'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wibu Coder</h1>
        </header>
        <Intro pesan="Ini adalah props yang dibuat wibu coder"/>
      </div>
    );
  }
}

export default App;
