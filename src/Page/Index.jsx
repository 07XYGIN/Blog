import React from 'react';
import { useState } from 'react';
import { Affix, Dropdown, Space } from 'antd';
import { CaretDownOutlined, HomeOutlined, UserOutlined, ProfileOutlined, LikeOutlined, RedditOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { Link, Outlet } from 'react-router-dom'
import '../Styles/Index/Index.css'
const App = () => {
  const items = [
    {
      label:<Link> <HomeOutlined twoToneColor="#eb2f96" />首页</Link>,
      key: '0',
    },
    {
      label:<Link to='article'><ProfileOutlined />文章</Link>,
      key: '1',
    },
    {
      label:<Link to='note'><LikeOutlined />笔记</Link>,
      key: '2',
    },
    {
      label:<Link to='renew'><ClockCircleOutlined />最近更新</Link>,
      key: '3',
    },
    {
      label:<Link to='about'><UserOutlined />关于</Link>,
      key: '4',
    },
  ];
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const [top, setTop] = React.useState(0);
  return (
    <div className="App">
      <div className="h"></div>
      <div className="container">
        <div className="yd">
          <h1>MX</h1>
          <div className="yd-b">
            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                <CaretDownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
        <Affix offsetTop={top} id='A'>
          <div className="nav">
            <div className="uls">
              <ul>
                <li>
                  <Link> <HomeOutlined twoToneColor="#eb2f96" />首页</Link>
                </li>
                <li>
                  <Link to='article'><ProfileOutlined />文章</Link>
                </li>
                <li>
                  <Link to='note'><LikeOutlined />笔记</Link>
                </li>
                <li>
                  <Link to='renew'><ClockCircleOutlined />最近更新</Link>
                </li>
                <li>
                  <Link to='demo'><RedditOutlined /><span id='spantext'>Demo</span></Link>
                </li>
              </ul>
            </div>
          </div>
        </Affix>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App;