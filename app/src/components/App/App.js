import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header heading="This is the header" />
        <Main />
      </div>
    );
  }
}

export default App;
