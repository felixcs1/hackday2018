import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Staff from './components/staff/Staff'
import User from './components/user/User'


class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              HELLO - app
            </header>
              <Route exact path="/user" component={User} />
              <Route exact path="/staff" component={Staff} />
          </div>
        </Router>
    );
  }
}

export default App;
