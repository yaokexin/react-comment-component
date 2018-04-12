// react 的基本使用 - JSX 语法

// 1 导入 react 和 react-dom
import React from 'react'
import ReactDOM from 'react-dom'

// 2 创建 react元素
// 使用 JSX语法，来创建 虚拟DOM对象
// JSX -> JavaScript XML，也就是在 JS代码中书写 HTML 结构
const dv = (
  // <div title="这是标题">通过JSX语法创建的虚拟DOM对象</div>
  <div>
    <h1>这是 JSX 的标题</h1>
    <ul>
      <li>这是第一个兄弟</li>
      <li>这是第2个兄弟</li>
    </ul>
  </div>
)

// 3 渲染 虚拟DOM
// 第一个参数：表示渲染哪个 react元素或组件
// 第二个参数：表示要渲染到页面中的哪个位置
ReactDOM.render(dv, document.getElementById('app'))
