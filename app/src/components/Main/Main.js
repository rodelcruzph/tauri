import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';

class Main extends Component {
  constructor(props) {
    super(props);

    this.api = 'http://localhost:1337';
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' render={(props) => (
            <Home {...props} dataApi={this.api} />
          )} />
          <Route exact path='/signup' render={(props) => (
            <Signup {...props} dataApi={this.api} />
          )} />
        </Switch>
      </main>
    );
  }
}

export default Main;
