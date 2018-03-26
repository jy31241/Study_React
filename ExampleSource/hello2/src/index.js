import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render()메서드는 HTML의 DOM노드를 JSX로 대체하는 일을 한다. 엔트리포인트
//render 뒤에 <App />는 App.js의 render()리턴되는 소스를 가져오는거
//root는 public/index/html의 div 아이디
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

//소스 수정하면 어플리케이션은 재실행 하지만 페이지는 새로고침 되지 않음 개꿀 ㅇㅈ ? ㅇㅇㅈ
if(module.hot){
    module.hot.accept();
}