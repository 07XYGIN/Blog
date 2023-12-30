import React from 'react';
import CardList from '../components/CardList'
import '../Styles/Demo/Index.css'
const App = () => {
  const arr = [
    {
      id: 1, name: '银峰物业后台管理系统', list: 'vue2 + vue-route + vuex +  ElementUi + dayjs',
      introduce: '1.将elementUi二次封装便于后续使用', introduce1: '2.封装AXios便于后期对接口进行集中处理',
      introduce2: ' 3.通过Echars实现数据可视化', introduce4:'4.使用postman检测接口可用性,用于辅助开发',
      introduce5: '使用Vue-Router完成前端路由,实现编程式导航',
      href: 'https://github.com/07XYGIN/HT-2-', 
      xm: '银峰是以vue2全家桶搭建的实时监控小区信息的后台管理系统,使用前后端分离的方式开发网站PC端,管理人员可以通过该系统观察各个小区的情况,便于后续维修等处理'
    },
    {
      id: 2, name: 'LI健身后台管理系统', list: 'Vue3 + Pinia + Element-Plus + axios + dayjs + Vite + TS',
      introduce: '1. 基于Element-Plus组件实现页面布局,并对其中主要组件进行封装便于重复使用', introduce2: '2. 使用Pinia存储登录成功的信息,便于登录后的验证',
      introduce3: '3.dayjs对时间进行格式化',
      href: 'https://github.com/07XYGIN/V3',
      xm:'LI是以Vue3及其全家桶设计的健身店铺对消费者的集中管理'
    },
    {
      id: 3, name: '严选商城小程序(微信原生)', list: '微信开发者工具 +  Vant Weapp + dayjs',
      introduce: '1. 基于Vant Weapp实现页面布局,并对其中主要组件进行封装便于重复使用', introduce1: '2.封装wx.request方法实现数据交互',
      introduce3: '3.dayjs对时间进行格式化',
      xm:'严选商城是基于原生微信开发着工具开发的商城类小程序,为了让广大消费者购物更简单',
      mp4:'我是mp4',
      href: ''
    },
    {
      id: 4, name: '严选商城小程序(Uniapp)', list: 'Uniapp + U-view + dayjs',
      introduce: '1. 基于U-viewp实现页面布局,并对其中主要组件进行封装便于重复使用', introduce1: '2.封装uni.request方法实现数据交互',
      href: 'https://github.com/07XYGIN/Shop-UNI',introduce3:'dayjs用于将时间格式化',
      xm:'严选商城小程序的Uniapp版本,通过在Uniapp上复现微信原生版本的错误并加以解决',
      mp4:'我是mp4',
    },
  ]
  return (
    <div className='box'>
      <div className="div">
        <CardList arr={arr}></CardList>
      </div>
    </div>
  )
}
export default App