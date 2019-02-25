import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import TrData from './TrData';

class List extends React.Component {
    constructor(props){
        super(props);
        this.state={
            users:[],
            isLoaded:false
          }
  }
  componentDidMount(){
    const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
    axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
    .then(function (response) {
      _this.setState({
        users:response.data,
        isLoaded:true
      });
    })
    .catch(function (error) {
      console.log(error);
      _this.setState({
        isLoaded:false,
        error:error
      })
    })
  }
  
  render() {
    
      return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">姓名</th>
              <th className="text-center">性别</th>
              <th className="text-center">年龄</th>
            </tr>
          </thead>
        <tbody>
           <TrData users={this.state.users}/>
        </tbody>
        </table>
      )  
      }
  
}
export default List