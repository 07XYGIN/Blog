- selsct 字段1,字段2,...,字段N from 表名 ---> 查询表内指定字段名
- select * from 表名 ---> 查询表内所有字段名
- select distinct 字段 from 表名 --->去重
  条件查询 
  1.根据大小判断
- select * from 表名 where 字段 > 50; 
  2.判断字段中是否没有值
- select * from 表名 where 字段 is null
  3.判断字段中是否有值
- select * from 表名 where 字段 is not null
  4.&& || !
- select * from 表名 where 字段 = name && content in(names1,names2) ; in() = ||
  5.根据字符串长度模糊搜索
- select * from 表名 where 字段 like '____';  一个_代表一个字符串长度
- select * from 表名 where 字段 like '%names'; % 从末尾开始搜索
- select count(字段 || *) from 表名 表中所有数据
- select avg(字段) from 表名 求指定字段的平均值
- select max/min(字段) from 表名 求指定字段的最大值和最小值
- select sum(字段) from 表名 求和指定字段
- select  字段,count(*) from 表名 group by 字段; 根据字段分组对齐操作
- select * from 表名 order by 字段   增序
- select * from 表名 order by 字段 desc 降序
- select * from name limit 10 offset 0 分页查询 一页十条 下一页 limit 10 offset 10  前者是条数 后者是页数