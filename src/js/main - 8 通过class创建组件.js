// 通过 class 创建有状态的组件

// 1 导入 react
import React from 'react'
import ReactDOM from 'react-dom'

// 2 创建组件
// 注意：
//  1 必须提供一个 render 方法
//  2 render方法必须有返回值，要么返回 null，要么返回 JSX对象
//  3 在 方法中，通过 this.props 获取到传递给组件的数据
class Hello extends React.Component {
  render() {
    console.log(this.props);
    
    // this.props.name = 'rose'

    // return null
    return (
      <div>
        <h1>这是通过 class 创建的组件 -- { this.props.name }</h1>
      </div>
    )
  }
}

// 3 渲染组件
ReactDOM.render(
  <Hello name="jack"></Hello>,
  document.getElementById('app')
)