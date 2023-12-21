import React from 'react';
import Cards from '../components/Cards'
const App = () => {
  const arr = [
    {id:1,name:'JS',time:'2023-12-14',text:'JS是最好的语言',href:'01'},
    {id:2,name:'React',time:'2023-12-14',text:'React是基于JS研发的框架',href:'02'},
    {id:3,name:'Vue',time:'2023-12-14',text:'Vue是基于JS研发的框架',href:'03'},
    {id:4,name:'Vue3',time:'2023-12-14',text:'Vue3是Vue2的升级版,使用更便捷',href:'04'}
  ]
  return (
    <div>
      <Cards arr={arr}></Cards>
    </div>
  )
}

export default App