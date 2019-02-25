import React from 'react';
import {Button} from 'antd';
import '../App.css'; //上一级目录

class Childd extends React.Component{
    constructor(props){
        super(props);
            this.state={
                lists:0,
                addContext:'yangjian',
                list:[
                    {
                        id:1,
                        context:'yj',
                        done:false
                    },
                    {
                        id:2,
                        context:'jy',
                        done:true
                    }
                ]
            }
        
    }
    add=()=>{
        this.setState({
            lists:++this.state.lists
        })
 
    }
    addTwo=()=>{
      const {list,addContext}=this.state
      console.log('list',list);
      console.log(addContext);
    list.push({
        id:list.length+1,
        context:addContext,
         done:false
    })
    this.setState({list});
    }

    onChange=(e)=>{
       this.setState({addContext:e.target.value}) 
       console.log({addContext:e.target.value})
    }

    delete=(id)=>{
        console.log('123');
    let {list}=this.state;
  list=list.filter(item=>{
    return  item.id!=id
    }
    );
    this.setState({list});
       
    }
    done =(id)=> {
        let { list } = this.state;
        for (let i = 0, length = list.length; i < length; i++) {
         
          if (list[i].id === id) {
            console.log('132',list[0].id);
            list[i].done = true;
          }
        }
        
        this.setState({list});
      };



cancel  =(id)=> {
    let { list } = this.state;
    for (let i = 0, length = list.length; i < length; i++) {
     
      if (list[i].id === id) {
        console.log('132',list[0].id);
        list[i].done = false;
      }
    }
    
    this.setState({list});
  };
    render(){
        const {list}=this.state;
        return(
            <div>
                <input 
               value={this.state.addContext}
                onChange={this.onChange}
                />
                <Button 
                type='primary'
                onClick={this.addTwo}
                >添加
                </Button>
               <ul>
                    {list.map((item,key)=>
                   (
                      console.log(item),
                       <li key={key}>
                            {item.id}
                            {item.context}
                            {item.done?' √√√':''}
                            {!item.done && 
                               <Button onClick={()=>this.done(item.id)}>done</Button>
                            }
                          
                            <Button 
                            type='primary'
                            onClick={()=>this.delete(item.id)}
                            >
                            delete</Button>
                         <Button onClick={()=>this.cancel(item.id)}>cancel</Button> 

                       </li>   
                   )
                        )}
               </ul>    
                    <Button
                    onClick={this.add}
                    >
                    👍{this.state.lists}
                    </Button>
                    
            </div> 
        );
    }
}
export default Childd;