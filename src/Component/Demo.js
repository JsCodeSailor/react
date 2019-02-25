import React from 'react'
import '../App.css'
import {Button} from 'antd'
class Demo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:0,
            addText:"react",
            lists:[
                {
                    id:1,
                    conText:'杨健',
                    done:true
                },
                {
                    id:2,
                    conText:'金礼玉',
                    done:false
                }
            ]
        }
    }
    add=()=>{
        let {list}=this.state
        this.setState({list:++list})
    }

    addTwo=()=>{
        let {lists,addText}=this.state
        lists.push(
            {
                id:lists.length+1,
                conText:addText,
                done:false
            }
        )
        this.setState({lists})
    }
    onChange=(e)=>{
        let {addText}=this.state
        this.setState({addText:e.target.value})
    }
    done=(id)=>{
        let {lists}=this.state
        for(let i=0;i<lists.length;i++){
            if(lists[i].id==id){
                lists[i].done=true
            }
        }
        this.setState({lists})
    }
    cancel=(id)=>{
        let {lists}=this.state
        for(let i=0;i<lists.length;i++){
            if(lists[i].id==id){
                lists[i].done=false
            }
        }
        this.setState({lists})
    }
    render(){
        let {list,lists,addText} =this.state
        return(
            <div>
                <input value={addText} onChange={this.onChange}/> 
                <Button
                    onClick={this.addTwo}
                >添加元素</Button>  

                <Button
                onClick={this.add}
                >
                    👍{this.state.list}
                </Button>

                <ul>
            {lists.map((item,key)=>(
                <li key={key}>
                    {item.id}
                    {item.conText}
                    {item.done ? "🐶" : ""}
                    {item.done ? '':<Button
                            type='primary'
                            onClick={()=>this.done(item.id)}
                        >done</Button>}
                        <Button
                            type='primary'
                            onClick={()=>this.cancel(item.id)}
                        >cancel</Button>
                </li>
            )) }    
                </ul>  
            </div>
        )
    }
}
export default Demo