import React from 'react'


export default class CommentFrom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comment:""
        }
        this.getComment = this.getComment.bind(this)
        this.submit = this.submit.bind(this)
    }

    render(){
        return(
            <div>
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
        this.props.addComment(this.state.comment)
    }
}