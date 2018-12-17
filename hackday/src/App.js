import React, { Component } from 'react';
import { Button, Col } from 'reactstrap';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Staff from './components/staff/Staff'
import User from './components/user/User'
import NavbarCustom from "./components/navbar";


class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.setHeadings = this.setHeadings.bind(this);
    // }


  render() {
    return (
        <Router>
          <div className="App">
              <NavbarCustom></NavbarCustom>

            <header className="App-header" >
                <Col sm={6}>
                    <h1 className="header series-title">Doctor Who</h1>
                    <h2 className="header episode-subtitle">Series 11: 4. Arachnids in the UK</h2>
                </Col>
                <Col sm={4}>
                    <img src="https://ichef.bbci.co.uk/images/ic/464x261/p06pvlym.jpg"></img>
                </Col>
            </header>
              <Route exact path="/user" component={User} />
              <Route exact path="/staff" component={Staff} />
          </div>
        </Router>
    );
  }
  //
  // setHeadings() {
  //   console.log('hello',     document.getElementsByClassName('series-title').textContent);
  //   document.getElementsByClassName('series-title').textContent = "HEADER";
  //   document.getElementsByClassName('episode-subtitle').textContent = "SUBHEADER";
  //
  // }


}

export default App;
