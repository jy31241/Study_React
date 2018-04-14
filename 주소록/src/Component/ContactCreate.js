import React from 'react';

export default class ContactCreate extends React.Component{
    constructor(props){
        super(props);
        this.state={ //이름,전화번호 스테이트 초기화
            name:'',
            phone:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    //input의 name의 값이 수정되면
    handleChange(e){
        let nextState ={};//비어있는 객체
        nextState[e.target.name] = e.target.value; //여러개의 인풋 처리,e.target.name은 input의 name부분을 가르킴(값말고 설정)
        this.setState(nextState) //수정된 객체 전달
    }
    //
    handleClick(){
        const contact ={ //만들어지고 수정 될 일이 없기때문에 상수형, 이 값이 콘택츠의 핸들크리에이트로 전달됨
            name : this.state.name,
            phone : this.state.phone
        };
        this.props.onCreate(contact);// 입력받은 이름,전화번호를 콘택트의 온 크리에이트로 전달
        this.setState({
            name:'',
            phone:''
        });
        this.nameInput.focus(); //네임 인풋에 포커스(렌더링에 ref)
    }
    //CharCode가 13 = 엔터, 일 때 클릭
    handleKeyPress(e){
        if(e.charCode===13){
            this.handleClick();
        }
    }

    render(){
        return(
            <div className="div_css">
            <h3 className="H3_css">주소 추가</h3>
            <p>
                <input type="text" name="name" placeholder="이름을 입력하세요" 
                value={this.state.name}
                onChange={this.handleChange}
                ref={(ref)=>{this.nameInput = ref}}/>

                <input type="text" name="phone" placeholder="전화번호를 입력하세요" 
                value={this.state.phone}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}/>
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