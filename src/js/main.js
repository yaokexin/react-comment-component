// 导入react 
import React from "react"
import ReactDOM from  "react-dom"

// 导入评论组件
import CommentList from "../components/CommentList.js"

//渲染评论组件

ReactDOM.render(
    <CommentList></CommentList>,
    document.getElementById("app")
)