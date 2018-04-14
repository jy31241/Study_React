import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    name : "park",
    age : 25,
    ID : 0,
  },
  {
    name : "wanga",
    age : 26,
    ID : 1
  }
]


class App extends Component {
  
  onDismiss(name){
    const isNotId = item => item.name !==name;
    const updatedList = this.state.list1.filter(isNotId);
    this.setState({list1:updatedList});
    }

    onSearchChange(event){
      this.setState({searchTerm :event.target.value});
    }
  render() {
    const {searchTerm, list} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">컴포넌트 분리,구성</h1>
        </header>
          <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          />
          <Table/>
      </div>
    );
  }
}

class Search extends Component{
  render(){
    const {value, onChange} = this.props;
    return(
      <input
      type="text"
      value={value}
      onChange={onChange}
    />
    )
  } 
}

class Table extends Component{   
  render(){
    const {list, pattern, onDismiss} = this.props;
    const isSearched = searchTerm => item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase());

    return (
      <div>
        {list.filter(isSearched(pattern)).map(item =>
        <div ket={item.ID}>
        <span>{item.name}</span>
        <span>{item.age}</span>
        <span><button
        onClick={() => onDismiss(item.ID)}
        type="button"> Dissmis
        </button>
        </span>
        </div>
        )}
        </div>
    );
  }
}

export default App;
