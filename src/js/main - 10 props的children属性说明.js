// props.children 属性

// 1 导入 react
import React from 'react'
import ReactDOM from 'react-dom'

// 2 创建 Button组件
// props中的 children 属性，用来获取：使用组件标签时候，组件标签中包含的内容
//  比如：
/* 
<MyButton>
  <span>这是通过 children 传递的span标签</span>
</MyButton >
*/

function MyButton(props) {
  console.log(props);
  return (
    // 展示传递过来的 children 属性
    // <button>{ props.children }</button>

    // 展示传递过来的 children 函数，需要调用函数，否则，会报错
    // 因为函数不能作为 JSX 的子元素
    <button>{ props.children() }</button>
  )
}

// 3 渲染组件

ReactDOM.render(
  <MyButton>
    {/* 传递 span 元素作为 children */}
    <span>这是通过 children 传递的span标签</span>
  </MyButton>,
  document.getElementById('app')
)

// ReactDOM.render(
//   <MyButton>
//     {
//       // 传递 函数 作为children
//       function () {
//         return <p>将函数作为 children传递</p>
//       }
//     }
//   </MyButton>,
//   document.getElementById('app')
// )