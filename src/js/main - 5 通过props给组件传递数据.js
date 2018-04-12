// react 的基本使用 - JSX 语法

// 1 导入 react 和 react-dom
import React from 'react'
import ReactDOM from 'react-dom'

// 2 给函数式组件传递数据
function Hello(props) {
  // props 是一个对象，对象中包含了传递给组件的所有数据
  // {name: "jack", age: "19"}
  console.log(props);

  // 调用传递过来的方法
  props.fn()

  // 添加属性：会报错！
  // props.aaa = 'rose'

  // 修改属性：会报错！
  // props.name = 'rose'

  return (
    <div>
      <h1>这是标题，我是：{props.name}, 今年 { props.age } 岁了</h1>
    </div>
  )
}

// 3 渲染 组件
ReactDOM.render(
  <Hello name="jack" age={19} scores={ [99, 100, 120] } colors={ {a: 'red', b: 'blue'} } fn={ function() {console.log(12312313)} }></Hello>,
  document.getElementById('app'))

/* ReactDOM.render(
  <Hello name="jack" age="19"></Hello>,
  document.getElementById('app')) */

// 给组件传递数据的方式：
//  1 如果要给 组件传递数据，只需要将要传递的数据作为 组件的属性 即可
//  2 在组件中通过函数的参数 props 来获取到，传递给组件的数据
//  3 通过属性传递的数据都是字符串格式的，如果要传递数值，需要通过 {} 方式来传递
//      比如：<Hello age={19}></Hello> 传递的就是 19 数值
//  4 可以给组件传递任何类型的数据
//  5 props 是只读的对象！！！
