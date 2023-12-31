import React, { useEffect, useState, useMemo } from 'react';
import { Card, Space, notification, Affix, message } from 'antd';
import { GithubOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import '../Styles/Second/Second.css'
import day from 'dayjs'
import WX from '../Assets/WX.jpg'
import img from '../Assets/Logo.jpg'
import ReactMarkdown from 'react-markdown'
import Cards from '../components/Cards';
const App = () => {
  const [messageApi, contextHolders] = message.useMessage();
  const info = () => {
    messageApi.open({
      type: 'success',
      content: 'QQ:1270784682',
      duration: 5,
    });
  };
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
  let arr = [
    {id:1,name:'笔记-笔记标题',time:'2024-1-1',text:'笔记内容'}
  ]
  useEffect(() => {
    settTime(new Date());
    const time = day(Time).format('YYYY-MM-DD HH:mm:ss');
  }, []);
  return (
    <div className='box'>
      <div className="m">
        <Affix offsetTop={top} id="Aff">
          <div className="left">
            <Space direction="vertical" size={16} >
              <Card title={`站点描述`} className='Card' style={{ textAlign: 'center' }}>
                <div className="userList">
                  <img src={img} alt="" />
                  <p className='userName'>MX_</p>
                  <p>時間が経つのは早い,これでいい</p>
                </div>
                <p id='body'>当前时间 {`${day(Time).format('YYYY-MM-DD  HH:mm')}`}</p>
                <p>文章数<span>(0)</span></p>
                <p>笔记数<span>(0)</span></p>
                <div className="lx">
                  <Link to='https://github.com/07XYGIN'  id='github'><GithubOutlined /></Link>
                  <WechatOutlined onClick={() => openNotification('topRight')} id='wx' />
                  <QqOutlined id='qq' onClick={info} />
                  {contextHolders}
                </div>
              </Card>
              <Context.Provider value={contextValue}>
                {contextHolder}
              </Context.Provider>
            </Space>
            <Space className='pos'>
              <Card title={`分类`} className='Card'>
                <div className="bq">
                  <Link to='CssList'><span>CSS(0)</span></Link>
                  <Link to='JsList'><span>JS(0)</span></Link>
                  <Link to='TsList'><span>TS(0)</span></Link>
                  <Link to='VueList'><span>Vue(0)</span></Link>
                  <Link to='Vue3List'><span>Vue3(0)</span></Link>
                  <Link to='JsxList'><span>React(0)</span></Link>
                </div>
              </Card>
            </Space>
          </div>
        </Affix>
        <div className="right">
          <Cards arr={arr}></Cards>
        </div>
      </div>
    </div>
  );
};
export default App;