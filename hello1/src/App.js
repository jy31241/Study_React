import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  text = 'First-Studyyyy'
 hi() {
    alert("hi!!"+this.text)
  }

  render()
   {
    let message = "--First Study--"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h4> {this.props.name}</h4>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>{message}</h2>
        <button type="button" onClick={this.hi.bind(this)}>HI</button>
        <h3>{new Date().toString()}</h3>
        <h4>{this.text}</h4> 맴버변수나 메소드는 반드시 this 붙여준다.
      </div>
    );
  }
}
App.defaultProps={
  name : "박준영임"
};

export default App;
