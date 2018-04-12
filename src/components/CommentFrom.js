import React from 'react'


export default class CommentFrom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comment:"",
            user:"123"
        }
        this.getComment = this.getComment.bind(this)
        this.submit = this.submit.bind(this)
        this.getName = this.getName.bind(this)
    }

    render(){
        return(
            <div>
                <div>
                    <input type="text" value={this.state.user} onChange={this.getName}/>
                </div>
                <div>
                    <textarea cols="30" rows="10" value={this.state.comment} onChange = {this.getComment}></textarea>                    
                </div>
                <button onClick={this.submit}>提交</button>
            </div> 
        )
    }

    getComment(event){
        this.setState({
            comment:event.target.value
        })
    }

    submit(){  
        this.props.addComment(this.state.user,this.state.comment)
    }

    getName(event){
        this.setState({
            user:event.target.value
        })
    }
}