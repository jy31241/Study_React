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
      list,
    };
    this.onDismiss = this.onDismiss.bind(this); //클래스 컴포넌트 클래스 메서드는 클래스 생성자에서 바인딩해야한다.

  }

  onDismiss(name){
    const isNotId = item => item.name !==name;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({list:updatedList});
    }
  
  
  render() {
    return (
      <div className="App">
        {this.state.list.map(item=>
        <div key={item.number}>
        <span>{item.name}</span><br></br>
        <span><a href={item.url}>  URL</a></span>
        <br></br>
        <span><button 
        onClick={()=> this.onDismiss(item.name)} type="button">
        삭제</button></span>
        </div>
        )}
      </div>
    );
  }
}


export default App;
