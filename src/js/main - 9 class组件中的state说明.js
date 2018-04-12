// 通过 class 创建有状态的组件

// 1 导入 react
import React from 'react'
import ReactDOM from 'react-dom'

// 2 创建组件
// 问题：如何初始化 state 的值？？ 需要在类的 constructor 中给类初始化state状态
// 注意：1 默认情况下，state的值为：null
class Hello extends React.Component {
  constructor(props) {
    super(props)

    // 注意：
    //  1 如果需要在 constructor 中使用props，那么需要传递props
    //  2 如果不需要在 constructor 中使用 props，那么可以不用传递props
    // 但是，为了使用或记忆方便，我们就直接每次都将 props 传递
    console.log(this.props);

    // 初始化state
    // state 是 react 约定用来管理组件内部数据的固定的属性！！！
    // 注意：为了提高页面渲染的效率，不要将不需要在页面中展示的数据添加到state中！！！
    //      直接添加给 this 即可！！！
    this.state = {
      list: ['a', 'b', 'c'],
      // test: '这个属性不会展示在页面中'
    }

    // 将不会在页面中渲染的数据，直接添加给 this，那么在类内部的其他方法中直接通过this就可以获取到这个数据了
    this.test = '这个属性不会展示在页面中'
  }

  render() {
    console.log(this.state);

    // 修改 state 数据
    this.state.list.push('d')
    this.state.age = 99

    return (
      <div>
        <h1>这是通过 class 创建的组件 -- { this.props.name } -- {this.state.age}</h1>
        <p>状态：{this.state.list}</p>
        {/* <p>{ this.test }</p> */}
      </div>
    )
  }
}

// 3 渲染组件
ReactDOM.render(
  <Hello name="jack"></Hello>,
  document.getElementById('app')
)