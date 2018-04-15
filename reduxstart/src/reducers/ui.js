import * as types from '../actions/ActionsTypes';

//초기상태값 정의
const initialState ={
    color : [255,255,255]
};

export default function ui(state = initialState,action){
    if(action.type === types.SET_COLOR){
        return{
            color : action.color
        };
    }else{
        return state;
    }
}