import React from 'react';
import { Card, Space } from 'antd';
import '../Styles/CardList/index.css'
import { Link } from 'react-router-dom';
const App = (props) => {
  const arr = props.arr
  return (
    <div className='s'>
      <Space direction="vertical" size={16} id='bboxxxx'>
        {arr.map(item =>
          <Link to={item.href} key={item.id}>
            <Card title={item.name} className='Cbox'>
              <p id='h2'>技术栈:{item.list}</p>
              <span>描述:</span>
              <p>{item.text}</p>
              <p>{item.introduce}</p>
              <p>{item.introduce1}</p>
              <p>{item.introduce2}</p>
              <p>{item.introduce3}</p>
            </Card>
          </Link>
        )}
      </Space>
    </div>
  )
}

export default App