import React from 'react';
import { Card, Space } from 'antd';
import '../Styles/Cards/Cards.css';
import { Link } from 'react-router-dom';
const App = (props) => {
  let arr = props.arr
  return (
    <div>
      <Space direction="vertical" size={16} id='b'>
        {arr.map(item =>
          <Link to={item.href} key={item.id} >
            <Card className='Cards k' title={item.name}>
              <p id='h2'>{item.text}</p>
              <p className='time'>更新时间:{item.time}</p>
            </Card>
          </Link>
        )}
      </Space>
    </div>
  )
}

export default App