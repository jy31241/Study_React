import { combineReducers } from 'redux'; // 리듀서 통합
import counter from './conuter';
import ui from './ui';

const reducers = combineReducers({
    counter, ui
})

export default reducers;