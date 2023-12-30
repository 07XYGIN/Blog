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
          <Link to={item.href} key={item.id} className='asss'>
            <Card title={item.name} className='Cbox'>
              <p>项目描述:{item.xm}</p>
              <p id='h2'>技术栈:{item.list}</p>
              <span>描述:</span>
              <p>{item.text}</p>
              <p>{item.introduce}</p>
              <p>{item.introduce1}</p>
              <p>{item.introduce2}</p>
              <p>{item.introduce3}</p>
              <p>{item.introduce4}</p>
              <p>{item.introduce5}</p>
              <p>{item.introduce6}</p>
              <p>{item.introduce7}</p>
              <p>{item.introduce8}</p>
            </Card>
          </Link>
        )}
      </Space>
      <div className="mp4">
        {arr.map(item =><div className='vmp'>{item.mp4}</div>)}
      </div>
    </div>
  )
}

export default App