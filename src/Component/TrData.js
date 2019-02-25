import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class TrData extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return (
        this.props.users.map((user,i)=>
                <tr key={i} className="text-center">
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.sex}</td>
                  <td>{user.title}</td>
                </tr>  
        )
      )
   
    }
  }
  export default TrData
