import React from 'react';
import { useState } from 'react';
import { Affix, Button, Drawer } from 'antd';
import { MenuFoldOutlined, HomeOutlined, UserOutlined, ProfileOutlined, LikeOutlined, RedditOutlined, ClockCircleOutlined, DownOutlined } from '@ant-design/icons'
import { Link, Outlet } from 'react-router-dom'
import '../Styles/Index/Index.css'
import img from '../Assets/Logo.jpg'
const App = () => {
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
            <Button type="primary" onClick={showDrawer}>
            <MenuFoldOutlined />
            </Button>
            <Drawer title="" placement="right" onClose={onClose} open={open} rootClassName='dr'>
            <ul id='lis'>
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
                <li>
                  <Link to='about'><UserOutlined />关于</Link>
                </li>
              </ul>
            </Drawer>
          </div>
        </div>
        <Affix offsetTop={top} id='A'>
          <div className="nav">
            <div className="user">
              <img src={img} alt="" />
            </div>
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
                <li>
                  <Link to='about'><UserOutlined />关于</Link>
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