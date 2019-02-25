import React from 'react';
import Complete from './Component/Complete';
import NormalLoginForm from './Component/From';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');


class Two extends React.Component{
  
  render(){
    return(
      <LocaleProvider locale={zh_CN}>
      
  <NormalLoginForm />
    
      
      </LocaleProvider>
  
 
 
  

       
    
    );
  }
}
export default Two