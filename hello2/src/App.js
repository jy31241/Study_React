import React, { Component } from 'react';
import './App.css';

//list 는 객체 배열
const list1= [
  {
    name : "park", //가각 프로퍼티 
    age : "25",
    number : 3,
    url : "https://www.naver.com"
  },
  {
    name : "Lee",
    age : 33,
    number : "11"
  }
]
 //map은 반복문
const listmap = list1.map(item =>
<div>
  <a href={item.url}>유알엘</a>
<span>{item.name}</span> 
<span>{item.age}</span> 
<span>{item.number}</span> 
</div>
);

//var 로 선언하면 수정불가능 let은 가능
let hello = "안녕리엑트";
hello = "hello react?" 

 //const 단순 선언하면 불변이지만 객체타입은 수정가능
const hi ={
  text: '리엑트 안녕하세요'
};
hi.text = "Hi 리엑트"

class App extends Component {
  render(){
    return(
    <div className="App">
      <h1>{hello}</h1>
      <h2>{hi.text}</h2>
      <li>---------------------</li>
      <h3>{listmap}</h3>
      
      {park.getname()}
    </div>
    );
  }
}
 //클래스에는 인스턴스화 할 수 있는 생성자가 있다. 생성자는 매개변수를 사용해서 클래스를 인스턴스에 할당한다.
class Developer {
  constructor (firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
  }
  getname(){
    return this.firstname + ' ' + this.lastname;
  }
}
const park = new Developer("Park","JUNYEONG");

export default App;