// 导入react 
import React from "react"
import ReactDOM from  "react-dom"

//创建组件
class CommentList extends React.Component{
    constructor(props){
        super(props)
        //组件内部的数据
        this.state = {
            list:[
                {user:"姚可鑫",content:"哈哈"},
                { user: "姚可鑫1", content: "哈哈1" },
                { user: "姚可鑫2", content: "哈哈2" },
                { user: "姚可鑫3", content: "哈哈3" }
            ]
        }
    }
    render(){
        return (
            <div>
                <h1>评论组件</h1>
                <ul>
                    {this.state.list.map(function(item,i){
                        return (
                            <li key={i}>
                                <h3>评论人:{item.user}</h3>
                                <p>
                                    评论内容:{item.content}
                                </p>
                            </li>
                        )
                    })}
                </ul>    
            </div>
        )
    }
}


//渲染评论组件

ReactDOM.render(
    <CommentList></CommentList>,
    document.getElementById("app")
)