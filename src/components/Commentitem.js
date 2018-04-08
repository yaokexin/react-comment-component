// 评论项的组件  其中的li
import React  from 'react' 
//通过 函数式的创建组件
//通过参数 props 来传递值
export default function Commentitem(props){
    return (
        <li>
            <h3>评论人:{props.user}</h3>
            <p>
                评论内容:{props.content}
            </p>
        </li>
    )
}