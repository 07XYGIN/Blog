import React from 'react';
import { Space } from 'antd';
import { Link } from 'react-router-dom';
import '../Styles/Demo/Index.css'
const App = () => {
  return (
    <div className='box'>
      <div className="div">
      <Link to="https://github.com/07XYGIN/HT-2-" className='a'>
        <Space direction="vertical" size={16}>
          <h4>一</h4>
          <p>项目名称:小区物业后台管理系统</p>
          <p>技术栈:Vue2 + ElementUi + Less + Day.js + axios</p>
          <p>项目描述: </p>
          <ul>
            <li>1. 通过Echars将该小区的基础数据渲染到首页中</li>
            <li>2. 将ElementUI组件二次封装便于后续使用</li>
            <li>3. 对Axios二次封装实现动态数据交互</li>
            <li>4. 使用dayjs处理时间数据</li>
          </ul>
          <br />
          <br />
        </Space>
      </Link>
      <Link to="#" className='a'>
        <Space direction="vertical" size={16}>
          <h4>二</h4>
          <p>项目名称:严选小程序</p>
          <p>技术栈:微信原生 + Vant-Weapp + Axios</p>
          <p>项目描述: </p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <br />
          <br />
        </Space>
      </Link>
      </div>
    </div>
  )
}
export default App