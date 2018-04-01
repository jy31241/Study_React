import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list1 = [
  {
    name : "park",
    age : 25,
    sex : "male",
    country : "KR"
  },
  {
    name : "Lee",
    age : 23,
    sex : "female",
    country : "USA"
  }
]


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      list1,
      searchWord :'',
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event){
    this.setState({searchWord :event.target.value});
  }

  onDismiss(){

  }

  render() {

    const isSearched = searchWord => item =>
        item.name.toLowerCase().includes(searchWord.toLowerCase());
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">리액트 검색 예제</h1>
        </header>
       
        <form>
          검색 <input 
          type="text"
          onChange={this.onSearchChange}
            /></form>
          <h1>--------- 리스트 ---------</h1>
          {this.state.list1.filter(isSearched(this.state.searchWord)).map(item =>
            <h1 className="h1bor">
            {item.name}<br></br>
            {item.age}<br></br>
            {item.sex}<br></br>
            {item.country}<br></br>
            </h1>
          )}
      </div>
    );
  }
}

  

export default App;
