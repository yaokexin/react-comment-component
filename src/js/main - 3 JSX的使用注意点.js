// react 的基本使用 - JSX 语法

// 1 导入 react 和 react-dom
import React from 'react'
import ReactDOM from 'react-dom'

// 2 创建 react元素
// 注意：
//  1 在JSX中可以直接使用JS代码，语法：{}，只有一个花括号
//  2 在JSX的花括号中，可以出现：任意的js表达式，但是不能使用 语句（for/if/switch-case）
//  3 在遍历元素的时候，需要为每一个兄弟元素指定 key 属性
//  4 JSX创建的元素中，属性也可以通过 {} 语法，比如：key={index}
//  5 JSX语法中的注释写法：{/* 注释内容 */}

var age = 19
var name = 'jack'

var jack = {
  age: 30,
  name: 'jack1'
}

var arr = [1, 3, 5]

const dv = (
  // <div title="这是标题">通过JSX语法创建的虚拟DOM对象</div>
  
  <div>
    {/* <h1>在JSX中使用JS代码，年龄：{ age }，姓名：{ name }</h1> */}
    <h1>在JSX中使用JS代码，年龄：{ jack.age }，姓名：{ jack.name }</h1>
    <p>{ 1 + 2 }</p>
    <p>{ [1, 3, 5].join('-') }</p>
    <p>{ 1 > 0 ? '大于': '小于' }</p>
    <p>
      { 
        arr.map(function(item, index) {
          return (
            <span key={index}>当前项：{item}</span>
          )
        })
      }
    </p>
  </div>
)

// 3 渲染 虚拟DOM
// 第一个参数：表示渲染哪个 react元素或组件
// 第二个参数：表示要渲染到页面中的哪个位置
ReactDOM.render(dv, document.getElementById('app'))
