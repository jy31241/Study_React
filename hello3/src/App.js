import React, { Component } from 'react';
import './App.css';

const list =[
  {
    name : "Park",
    url : "https://pjya0321.github.io",
    number : 1
  },
  {
    name : "LEE",
    url : "https://pjya0321.github.io",
    number : 2
  }
];

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      list:list,
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.list.map(item=>
        <div key={item.number}>
        <span>{item.name}</span>
        <span><a href={item.url}>URL</a></span>
        </div>
        )}
      </div>
    );
  }
}

export default App;
