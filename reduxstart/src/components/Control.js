import React, { Component, PropTypes } from 'react';

function createWarning(funcName){
    return () => console.warn(funcName + "is not defined")
}
const defaultProps = {
    onPlus : createWarning("onPlus"),
    onSubtract : createWarning("onSubtract"),
    onRandomizeColor : createWarning("onRandomizecolor")
};

class Comtrol extends Component {
    constructor(props) {
        super(props);
    }
    render() {
       return(
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>랜덤색상</button>
            </div>
        );
    }
}
Comtrol.defaultProps = defaultProps;
export default Comtrol;
