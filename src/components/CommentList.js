import React from 'react'

//导入commentitem的组件
import Commentitem from './Commentitem.js' 
import CommentFrom from './CommentFrom.js'

//子组件传递数据给 父组件
//1.父组件提供一个方法
//2.子组件调用这个方法

//创建组件  并且导出组件
export default class CommentList extends React.Component {
    constructor(props) {
        super(props)
        //组件内部的数据
        this.state = {
            list: [
                { user: "姚可鑫", content: "哈哈" },
                { user: "姚可鑫1", content: "哈哈1" },
                { user: "姚可鑫2", content: "哈哈2" },
                { user: "姚可鑫3", content: "哈哈3" }
            ]
        }
        this.addComment = this.addComment.bind(this)
    }
    //提供一个方法
    addComment(user,content){
        console.log(this);
        // console.log('父组件中获取到数据',data)
        this.state.list.unshift({user,content})
        this.setState({
            list:this.state.list
        })
    }


    renderList() {
        return this.state.list.map((item, i) => (
          

            //通过 props 来传递数据
            // key 属性  遍历谁 加给谁
            <Commentitem {...item} key={i} ></Commentitem>
        )
        )
    }
    render() {
        return (
            <div>
                <h1>评论组件</h1>
                <CommentFrom addComment={this.addComment}></CommentFrom>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}
