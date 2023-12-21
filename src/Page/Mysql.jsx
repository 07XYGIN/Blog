import '../Styles/MySQL/index.css'
import ReactMarkdown from 'react-markdown'
const app=()=>{
  return(
    <div className="con">
      <p className='p'>MYSQL基础</p>
      <p className="date">2023-12-19</p>
      <div className="text">
          <h2>介绍</h2>
          <p>MYSQL是一个<b>关系型数据库</b> </p>根据不同功能,将其分为
          <code>DDL</code>,<code>DML</code>,<code>DQL</code>,<code>DCL</code>
          <p><b>DDL</b>(Data Definition Language): <span>数据定义语言,用来定义数据库对象(数据库,表,字段)等</span> </p>
          <p><b>DML</b>(Data Manipulation Language): <span>数据操作语言,用来对数据库表中的数据进行增删改</span> </p>
          <p><b>DQL</b>(Data Query Language): <span>数据查询语言,用来查询数据库中表的记录</span> </p>
          <p><b>DCL</b>(Data Control Language): <span>数据控制语言,用来创建数据库用户,控制数据库的访问权限</span> </p>
          <ReactMarkdown>
            ****
          </ReactMarkdown>
      </div>
    
    </div>
  )
}

export default app;