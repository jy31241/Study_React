import React from 'react';

export default class ContactCreate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            phone:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    //input의 name의 값이 수정되면
    handleChange(e){
        let nextState ={};
        nextState[e.target.name] = e.target.value; //e.target.name은 input의 name부분을 가르킴(값말고 설정)
        this.setState(nextState) //수정된 객체 전달
    }
    //
    handleClick(){
        const contact ={
            name : this.state.name,
            phone : this.state.phone
        };
        this.props.onCreate(contact);
        this.setState({
            name:'',
            phone:''
        });
    }

    render(){
        return(
            <div className="div_css">
            <h3 className="H3_css">주소 추가</h3>
            <p>
                <input type="text" name="name" placeholder="이름을 입력하세요" 
                value={this.state.name}
                onChange={this.handleChange}/>

                <input type="text" name="phone" placeholder="전화번호를 입력하세요" 
                value={this.state.phone}
                onChange={this.handleChange}/>
            </p>
            <button onClick={this.handleClick}>추가</button>
            
            </div>
        )
    }
}

ContactCreate.propTypes = {
    onCreate : React.propTypes
};

ContactCreate.defatulProps={
    onCreate:()=>{console.error('주소추가가 디파인되지 않음')}
}