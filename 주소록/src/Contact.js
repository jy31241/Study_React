import React from 'react';
import Contactinfo from './Contactinfo';
import ContactDetails from './ContactDetails';
import ContactCreate from './ContactCreate';
import './App.css';
import update from 'react-addons-update';

export default class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedkey:1,
            keyword:"",
            contactData:[
                {
                name : 'Park',
                phone : '010-5489-5801'
                },
                {
                name : 'Lee',
                phone : '010-3252-1232'
                },
                {
                name : 'Choi',
                phone : '010-2344-5832'
                }]
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleClick = this.handleClick.bind(this);
            this.handleCreate = this.handleCreate.bind(this);
            this.handleRemove  = this.handleRemove.bind(this);
            this.handleEdit = this.handleEdit.bind(this);
        }

        // 키워드값을 이벤트 객체의 타겟의 값으로 정함
        handleChange(e){
            this.setState({
                keyword : e.target.value 
            });

        //현재 클릭한 키값(배열순 항상 0이상), 선택안한경우 ContactDetails.js에서 False이기 때문에 -1이 됨
        }
        handleClick(key){
            this.setState({
                selectedkey : key
            });
        }

        //배열에 새로운 주소를 푸쉬
        handleCreate(contact){
            this.setState({
                contactData: update(this.state.contactData,
                    {$push:[contact]}) 
            });
        }
        //데이터 제거를 위해 스플라이스, 셀렉트 키 번째 부터 1개의 데이터를 삭제
        handleRemove(){
            this.setState({
                contactData: update(this.state.contactData,
                    {$splice:[[this.state.selectedkey,1]]}),
                selectedkey:-1 //제거하고 셀렉트키 무효화
            });
        }

        //이름과 폰을 매개변수로 셋 해줌
        handleEdit(name,phone){
            this.setState({
                contactData: update(this.state.contactData,
                    {[this.setState.selectedkey]:{
                        name:{$set:name},
                        phone:{$set:phone}
                    }})
            });
        }


        render() {
            const mapToComponents = (data) =>{
                data.sort();
                data = data.filter(
                    (contact)=>{
                        return contact.name.toLowerCase()
                        .indexOf(this.state.keyword.toLowerCase())>-1;
                    }
            )
                return data.map((contact,i)=>{
                    return (<Contactinfo 
                        contact={contact} 
                        key={i}
                        onClick={()=>this.handleClick(i)}/>);
                });
            };
            return (
                <div>
                    <h1>주소록</h1>
                    
                    검색 : <input 
                    name = "Keyword"
                    placeholder="검색할 내용을 입력하세요"
                    value = {this.state.keyword}
                    onChange={this.handleChange}
                    /><br/><br/>

                    <h3 className="H3_css">목록</h3>
                    <div className="div_css">{mapToComponents(this.state.contactData)}</div>
                    
                    <h3 className="H3_css">세부내용</h3>
                    <ContactDetails 
                    isSelected={this.state.selectedkey !== -1}
                    contact ={this.state.contactData[this.state.selectedkey]}/>

                    <ContactCreate
                    onCreate={this.handleCreate}/>
                    </div>
                    );
                }
            }
        

