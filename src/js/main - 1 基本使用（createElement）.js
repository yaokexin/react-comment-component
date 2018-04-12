// react 的基本使用

// 1 导入 react 和 react-dom
import React from 'react'
import ReactDOM from 'react-dom'

// 2 创建 react元素
// 第一个参数：表示创建react元素的名称
// 第二个参数：是一个对象，用来表示创建的react元素的属性
// 第三个参数：表示当前元素的子节点
// 返回值：创建好的 react虚拟DOM对象

// <div title="这是标题">这是创建的div元素的子节点 - 文本节点</div>
const dv = React.createElement('div', {
  title: '这是标题',
  name: '这是name属性'
}, '这是创建的div元素的子节点 - 文本节点')

// 3 渲染 虚拟DOM
// 第一个参数：表示渲染哪个 react元素或组件
// 第二个参数：表示要渲染到页面中的哪个位置
ReactDOM.render(dv, document.getElementById('app'))
