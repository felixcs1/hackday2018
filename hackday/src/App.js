import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import QuestionContainer from './components/question-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          HELLO - app 
        </header>
        <QuestionContainer></QuestionContainer>
      </div>
    );
  }
}

export default App;
