import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

//액션을 리듀서로 보내기위해 스토어 생성
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();

if (module.hot) {
    module.hot.accept();
}