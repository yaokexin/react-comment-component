// react 的基本使用 - JSX 语法

// 1 导入 react 和 react-dom
import React from 'react'
import ReactDOM from 'react-dom'

// 2 通过 JS中的函数 创建 组件
// 通过 JS中的函数来创建一个组件，渲染组件的时候，通过将函数名称作为标签名称，来进行渲染
// 注意：
//  1 使用函数组件的时候，必须要有return语句，return 后面必须带有内容
//    如果什么都不想放回（也就是不想在页面中渲染任何DOM结构），那么需要 return null
//  2 return 的内容，最好使用小括号包裹，否则，再return语句换行的时候，会造成解析错误
//  3 组件的名称（函数名称）必须是大写字母开头！！！
//    react 内部通过 首字母大小写来区分是 组件 还是 普通的DOM元素
//  4 组件中返回的JSX必须有一个唯一的根元素！！！
function Hello() {
  // return null
  return (
    <div>
      <div title="这是标准的HTML属性" test={1111} data-abc="1231">
        这是 Hello 组件
      </div>
      <h1>这是标题</h1>
    </div>
  )
}

// 3 渲染 组件
ReactDOM.render(<Hello></Hello>, document.getElementById('app'))
