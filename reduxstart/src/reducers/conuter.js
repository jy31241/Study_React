import * as types from '../actions/ActionsTypes'

//초기상태값 정의
const initialState ={
    number : 0
};

export default function counter(state = initialState,action){
    switch(action.type){
        case types.INCREMENT:
        return {...state, 
            number: state.number +1}; // state객체를 바꾼게 아니라 새로운 객체에 +1해준다. redux니까!
    
        case types.DECREMENT:
        return {...state, 
            number: state.number -1};

        default:
        return state;
    }
}