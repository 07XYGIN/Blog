import '../Styles/MySQL/index.css'
import { View, Text } from 'react-native';  
import HTMLView from 'react-native-htmlview';  
const content = '<p><a href="">♥ nice job!</a></p>'; 
const app = (props) => {
  let arr = props.arr
  return (
    <div className="con">
      <p className='p'>{arr.title}</p>
      <p className='date'>更新时间:{arr.date}</p>
      <div className="text">
        <p>{arr.text}<b>{arr.b}</b></p>
        {arr.a}
        <HTMLView value={content} stylesheet={{ a: { color: 'blue' } }} onLinkPress={url => console.log('navigating to: ', url)} /> 
      </div>
    </div>
  )
}

export default app;