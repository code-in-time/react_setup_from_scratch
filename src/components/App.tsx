
import React, { Component } from 'react';
import Form from "./Form";
import './App.css';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Main />
      </div>
    );
  }
}

export default App;