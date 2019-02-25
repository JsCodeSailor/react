import React from 'react'
import {Button} from 'antd'
import '../App.css'

class ListButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:0,
            addText:'react',
            lists:[
                {
                    id:1,
                    context:'金礼玉',
                    done:false
                },
                {
                    id:2,
                    context:'杨健',
                    done:true
                }
            ]
        }
    }
    add=()=>{
        let {list} = this.state
        this.setState({list:++list})
    }

    onChange=(e)=>{
        this.setState({addText:e.target.value});
        console.log({addText:e.target.value});
    }
    addTwo=()=>{
        let {lists,addText}=this.state
        lists.push({
            id:lists.length+1,
            context:addText,
            done:false
        })
        this.setState({lists})
    }
    done=(id)=>{
    let {lists}=this.state
    for(let i=0;i<lists.length;i++){
        if(lists[i].id===id)
        {
            lists[i].done=true
        }
    }
    this.setState({lists})
    }
    cancel=(id)=>{
        let {lists}=this.state
        for(let i=0;i<lists.length;i++){
            if(lists[i].id===id)
            {
                lists[i].done=false
            }
        }
        this.setState({lists})
        }

    delete=(id)=>{
        console.log('id',id)
     let {lists}=this.state 
    lists=lists.filter(x=>{
        // console.log("item",x);
        return x.id!==id
    }
        )
        this.setState({lists})
    }
    render(){
        let {addText,lists}=this.state
        return(
            <div>
                <input value={addText} onChange={this.onChange}/>
                <Button type='primary' onClick={this.addTwo}>添加元素</Button>   
                <ul>
                 {lists.map((item,key)=>(
                     console.log('item2',item),
                    <li key={key}>
                        {item.id}
                        {item.context}
                        {item.done ? '🐕':''}
                        {item.done ? '':<Button
                            type='primary'
                            onClick={()=>this.done(item.id)}
                        >done</Button>}
                        <Button
                        onClick={()=>this.delete(item.id)}
                        >delete</Button>
                        <Button
                        type='primary'
                        onClick={()=>this.cancel(item.id)}
                        >cancel</Button>
                    </li>
                 ))}
                    
                </ul>

                <Button             
                onClick={this.add}
                >
                👍{this.state.list}
                </Button>
            </div>
        )
    }
}
export default ListButton