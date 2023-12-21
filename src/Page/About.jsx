import img from '../Assets/Logo.jpg'
import React from 'react';
import {Link} from 'react-router-dom'
import '../Styles/About/Index.css'
const app = () => {
  return (
    <div className='app'>
      <div className="box animate__animated animate__fadeInDown">
        <img src={img} alt="" id='img' />
      </div>
      <p className='p1 animate__animated animate__fadeInDown'>关于梦想:成为一名<span>前端开发工程师</span></p>
      <p className='p2 animate__animated animate__fadeInDown'>关于此站点:<span>更新一些在学习中出现的问题,笔记,包括所写Demo,也会写其他方向的文章</span></p>
      <p className='p3 animate__animated animate__fadeInDown'>关于未来:<span>计划向其他方向发展，探索更多的技术领域</span></p>
      <p className='p4 animate__animated animate__fadeInDown'>批评与指正:<span>如果你对我的博客或文章有意见或建议,欢迎联系</span></p>
      <ul className='ul animate__animated animate__fadeInDown'>
        <li>WX:q127074682</li>
        <li>QQ:1270784682</li>
        <li>E-mail: xygin0708@163.com</li>
        <li><Link to='https://github.com/07XYGIN'>Github</Link></li>
      </ul>
    </div>
  )
}

export default app;