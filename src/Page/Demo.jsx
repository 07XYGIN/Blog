import React from 'react';
import CardList from '../components/CardList'
import '../Styles/Demo/Index.css'
const App = () => {
  const arr = [
    {
      id: 1, name: '物业后台管理系统', list: 'vue2 + vue-route + vuex +  ElementUi + dayjs', 
      introduce: '1.将elementUi二次封装便于后续使用', introduce1: '2.封装AXios便于后期对接口进行集中处理', 
      introduce2: ' 3.通过Echars将基础数据渲染到首页中', introduce3: '4.dayjs对时间进行格式化',
      href:'https://github.com/07XYGIN/HT-2-'
    },
    { id: 2, name: '健身后台管理系统', list: 'Vue3 + Pinia + Element-Plus + axios + dayjs', 
    introduce: '1. 基于Element-Plus组件实现页面布局,并对其中主要组件进行封装便于重复使用', introduce2: '2. 使用Pinia存储登录成功的信息,便于登录后的验证', 
    introduce3: '3.dayjs对时间进行格式化',
    href:'https://github.com/07XYGIN/V3'
  },
    { id: 3, name: '严选商城小程序(微信原生)', list: '微信开发者工具 +  Vant Weapp + dayjs', 
    introduce: '1. 基于Vant Weapp实现页面布局,并对其中主要组件进行封装便于重复使用', introduce1: '2.封装wx.request方法实现数据交互', 
    introduce3: '3.dayjs对时间进行格式化',
    href:''
  },
    { id: 4, name: '严选商城小程序(Uniapp)', list: 'Uniapp + U-view + dayjs' ,
    introduce: '1. 基于U-viewp实现页面布局,并对其中主要组件进行封装便于重复使用',introduce1: '2.封装uni.request方法实现数据交互',
    href:'https://github.com/07XYGIN/Shop-UNI'
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