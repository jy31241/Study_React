import React from 'react';
import './App.css';

export default class ContactDetails extends React.Component{
    render(){

        const details =(
        <div className="con_clicked">
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
        </div>
        );
        const blank = (
        <div>
            Not Selected
        </div>);
        return(
            <div className="div_css">{this.props.isSelected ? details : blank}</div>
        );
    }
}

ContactDetails.defaultProps={
    contact :{
        name: "",
        phone: ""
    }
};