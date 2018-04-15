import React, { Component, PropTypes } from 'react';
import Vaelue from './Value';
import Control from './Control'
import Value from './Value';
import { connect,bindActionCreators} from 'react-redux';
import * as actions from '../actions';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.setRandomcolor = this.setRandomcolor.bind(this);
    }

    setRandomcolor(){
        const color =[
            Math.floor((Math.random()*55)+200),
            Math.floor((Math.random()*55)+200),
            Math.floor((Math.random()*55)+200)
        ];
        this.props.handleSetColor(color);
    }
    render() {

        const color = this.props.color;
        const style = {
            background : `rgb(${color[0]},${color[1]},${color[2]})`
        }

       return(
            <div style={style}>
                <Value number={this.props.number}/>
                <Control 
                onPlus={this.props.handleIncrement}
                onSubtract={this.props.handleDecrement}
                onRandomizeColor={this.setRandomcolor}
                />
            </div>
        );
    }
}


//리듀서 스테이트 안에있는 값을 이 컴포넌트의 프롭스로 매핑
const mapStateToProps = (state) =>{
    return{
        number : state.counter.number,
        color : state.ui.color
    };
}

const mapDispatchToProps =(dispatch) =>{
    return{
        handleIncrement : ()=>{dispatch(actions.increment())},
        handleDecrement : ()=>{dispatch(actions.decrement())},
        handleSetColor : (color)=>{dispatch(actions.setColor(color))}
    };
    //위와 같은걸 한번에 바인딩 가능
    //return bindActionCreators(actions,dispatch); // 액션 크레에이터 이름 그대로 한번에 액션 바인딩
}

//리듀서 카운터에 연결
export default connect(mapStateToProps,mapDispatchToProps)( Counter );

