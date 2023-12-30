import React from 'react';
import Cards from '../components/Cards'
const App = () => {
  const arr = [
    {id:1,name:'JS',time:'2023-12-14',text:'JS是最好的语言',href:'01'},
  ]
  return (
    <div>
      <Cards arr={arr}></Cards>
    </div>
  )
}

export default App