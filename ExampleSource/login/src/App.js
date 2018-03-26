import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  countingWords(){
    document.getElementById("ouput").innerHTML= document.getElementById("input").value.length;
    } 
  
  render() 
  {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">움직이는 로그인 폼</h1> 
        </header>

        <form class="signUp" id="signupForm">
        <span id = "output">0</span> &nbsp;words
        <input id="input" onkeyUp="countingWords()"  type="text" class="signUpInput" placeholder="Type your username" autofocus required></input>
        <input type="password" class="signUpInput" placeholder="Choose a password" required></input>
        <input type="submit" value="Sign me up!" class="signUpButton"></input>

        </form>
      </div>
    );
  }
}
export default App;
