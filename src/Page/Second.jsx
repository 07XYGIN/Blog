import React, { useEffect, useState, useMemo } from 'react';
import { Card, Space, notification, Affix } from 'antd';
import { GithubOutlined, WechatOutlined, FormOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import '../Styles/Second/Second.css'
import day from 'dayjs'
import WX from '../Assets/WX.jpg'
const App = () => {
  const Context = React.createContext({ name: 'Default' });
  const [Time, settTime] = useState(new Date());
  const [api, contextHolder] = notification.useNotification();
  const contextValue = useMemo(() => ({ name: WX, image: WX }), []);
  const [top, setTop] = React.useState(80);
  const openNotification = (placement) => {
    api.info({
      description:
        <Context.Consumer>
          {({ image }) => (
            <div>
              <img src={image} alt="Image" />
            </div>
          )}
        </Context.Consumer>,
      placement,
      icon: <WechatOutlined />,
    });
  };
  useEffect(() => {
    settTime(new Date());
    const time = day(Time).format('YYYY-MM-DD HH:mm:ss');
  }, []);

  return (
    <div className='box'>
      <div className="ms">
        <Link to='/MySQL'>
          <Space direction="vertical" size={16} className='right-box'>
            <Card title={`MySQL基础`} hoverable={true} className='ks'>
              <p className="d"></p>
              <p className='date'>更新时间: 2023-12-19</p>
            </Card>
          </Space>
        </Link>
      </div>
      <div className="m">
        <Affix offsetTop={top} id="Aff">
          <div className="left">
            <Space direction="vertical" size={16} >
              <Card title={`XYGIN的博客`} hoverable={true} className='Card'>
                <p id='body'>当前时间 {`${day(Time).format('YYYY-MM-DD  HH:mm')}`}</p>
                <p>文章数<span>(0)</span></p>
                <p>笔记数<span>(0)</span></p>
                <div className="lx">
                  <Link to='https://github.com/07XYGIN'><GithubOutlined /></Link>
                  <WechatOutlined onClick={() => openNotification('topRight')} id='wx' />
                </div>
              </Card>
              <Context.Provider value={contextValue}>
                {contextHolder}
              </Context.Provider>
            </Space>
            <Space className='pos'>
              <FormOutlined className='icon' />
              <Card title={`标签`} hoverable={true} className='Card'>
                <div className="bq">
                  <Link><span>CSS(0)</span></Link>
                  <Link><span>JS(0)</span></Link>
                  <Link><span>TS(0)</span></Link>
                  <Link><span>Vue(0)</span></Link>
                  <Link><span>Vue3(0)</span></Link>
                  <Link><span>React(0)</span></Link>
                  <Link><span>Mysql(0)</span></Link>
                  <Link><span>Node(0)</span></Link>
                  <Link><span></span></Link>
                  <Link><span></span></Link>
                </div>
              </Card>
            </Space>
          </div>
        </Affix>
        <div className="right">
          <Link to='/MySQL'>
            <Space direction="vertical" size={16} className='right-box'>
            <Card title={`MySQL基础`} hoverable={true} className='k'>
              <p className="d"></p>
              <p className='date'>更新时间: 2023-12-19</p>
            </Card>
            </Space>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;