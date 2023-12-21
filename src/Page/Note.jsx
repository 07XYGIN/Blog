import React from 'react';
import Cards from '../components/Cards'
const App = () => {
  let arr = [{id:1,name:'Cards',time:'2023-12-15',href:'https://github.com/07XYGIN/MX/tree/master/23.12.15',text:'对Antd中Card简单封装,增加跳转功能'}]
  return (
    <div>
        <Cards arr={arr}></Cards>
    </div>
  )
}

export default App