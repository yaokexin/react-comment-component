// 评论项的组件  其中的li
import React  from 'react' 
//通过 函数式的创建组件
//通过参数 props 来传递值

var styles = {
    li:{
        listStyle:"none",
        border:"1px solid #ccc",
        marginBottom:10
    },
    h3:{
        color:"green"
    },
    p:{
        color:"pink"
    }
}
import "../css/index.css"

//在react中使用样式  两种方式
//1.直接在通过 style 的内联形式书写样式: style={{listStyle:"none"}}
// 是通过对象的形式 来设置样式  

//2.通过添加类名的方式 :  className="clo"
// 在jsx语法中class需要用 className来代替
// 此时需要 下载相应的loader: style loader   css loader
export default function Commentitem(props){
    return (
        <li style={styles.li} className="cls">
            <h3 style={styles.h3}>评论人:{props.user}</h3>
            <p style={styles.p}>
                评论内容:{props.content}
            </p>
        </li>
    )
}