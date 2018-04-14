import React from 'react';
import '../App.css';

export default class ContactDetails extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            isEdit : false,
            name:'',
            phone:''
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleToggle() {
        if(this.state.isEdit===false) {
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            });
        } else {
            this.handleEdit();
        }

        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    //input의 name의 값이 수정되면
    handleChange(e){
        let nextState ={};//비어있는 객체
        nextState[e.target.name] = e.target.value; //여러개의 인풋 처리,e.target.name은 input의 name부분을 가르킴(값말고 설정)
        this.setState(nextState) //수정된 객체 전달
    }

    handleEdit() {
        this.props.onEdit(this.state.name, this.state.phone);
    }

    //CharCode가 13 = 엔터, 일 때 클릭
    handleKeyPress(e){
        if(e.charCode===13){
            this.handleToggle();
        }
    }
 
    render(){

        const details =(
        <div className="con_clicked">
        <p>이름: {this.props.contact.name}</p>
        <p>번호: {this.props.contact.phone}</p>
        <button onClick={this.props.onRemove}>주소삭제</button>
        </div>
        );

        const edit =(
            <div><p>
            <input type="text" name="name" placeholder="이름을 입력하세요" 
            value={this.state.name}
            onChange={this.handleChange}/>
            </p>
            <p>
            <input type="text" name="phone" placeholder="전화번호를 입력하세요" 
            value={this.state.phone}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}/>
            </p></div>
        );

        const view = this.state.isEdit ? edit : details; 

        const blank = (<div>주소가 선택되지 않음</div>);

        return(
            <div className="div_css">{this.props.isSelected ? view : blank}
            <p>
                <button onClick={this.handleToggle}>
                {this.state.isEdit ? '수정완료' : '주소수정'}</button>
                
            </p>
            </div>
        );
    }
}

ContactDetails.defaultProps={
    contact :{
        name: "",
        phone: ""
    },
    onRemove:() => {console.error('onRemove Error');
},
    onEdit:() => {console.error('onEdit Error');}
    
};
