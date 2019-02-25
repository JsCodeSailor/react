import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Childd from'./Component/Childd';
import ListButton from './Component/ListButton';
import {Button} from 'antd';
import './App.css';
import   Complete from './Component/Complete'
import Antd from './Component/Antd'



class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list:[
        {
          id:1,
          content:'test',
          done:false
        },
        {
          id:2,
          content:'test2',
          done:true
        }
      ],
      childText: "childText2",
      addText: "Yj"
    }
    // this.delete=this.delete.bind(this);
  }

  add = () => {
    let { list, addText } = this.state;
    console.log(addText);
    console.log(list);
    // push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
    list.push({
      id: list.length + 1,
      content: addText,
      done: false
    });
    this.setState({ list });
  };

changeChild =()=>{
  this.setState(
    {childText:`i'm react`}
    );
}
  done =(id)=> {
    let { list } = this.state;
    for (let i = 0, length = list.length; i < length; i++) {
      if (list[i].id === id) {
        list[i].done = true;
      }
    }
    this.setState({list});
  };

  delete=(id)=>{
    let {list} =this.state;
    list = list.filter(item=>{
       

   // console.log(item.id)
     console.log(id);
    //  console.log(item);
      return item.id!==id
        })
    // for(let lists of list){
    //   console.log(lists.id);
    // }
    
    this.setState({list});
  };
  

  Cancel  =(id)=> {
    let { list } = this.state;
    for (let i = 0, length = list.length; i < length; i++) {
      if (list[i].id === id) {
        list[i].done = false;
      }
    }
    this.setState({list});
  };
 

  handleOnchange = e => {
    this.setState({ addText: e.target.value });
    //console.log({ addText: e.target.value });
  };

  render(){
    const {list}=this.state//解构函数。list获取list里面所有的值。
  return(
    <div>
     <input value={this.state.addText} onChange={this.handleOnchange} />
     <button onClick={this.add}>Add</button>
      <ul>
          {list.map((item, key) => (
            <li key={key}>
              {item.id}
              {item.content}
              {item.done ? "√" : ""}
              {!item.done && (
                <Button  type="primary" onClick={() => this.done(item.id)}>Done!</Button>
              )}
              <button onClick={()=> this.delete(item.id)}>Delete</button>
              <button onClick={()=> this.Cancel(item.id)}>Cancel</button>

             </li>
          ))}
          
        </ul>
        {/* <h1>{this.state.list[0].content}</h1> */}
        <h1>{this.state.childText}</h1>
         <h1>
          <Child conten={this.state.childText} click={this.changeChild} />
          <button onClick={this.changeChild}>本组件内改变状态</button>  
        </h1>
               
        <Childd name='yj'  number='15715513601' yj={this.state.childText} click={this.changeChild}/>

        <ListButton/>
        <Complete/>
        <Antd/>
    </div> 
    );
}
}
class Child extends React.PureComponent{ 
    render(){
  return(
     <div>
        {this.props.conten}
        <button  className='red'onClick={this.props.click}>本组件外改变状态</button>
        <Button type="primary">Primary</Button>
    </div> 
    );
}
}



export default TodoList;