import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentsList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isShow: false
        }
    }

    render() {
        return (
            <div>
            <button onClick = {this.toggleShow}> {this.state.isShow ? 'hide' : 'show'} </button>
              {this.showComments()}
            </div>
        )
    }

    toggleShow = () => {

      this.setState({
          isShow : !this.state.isShow
      })

    }

    showComments = () => {

        if (!this.state.isShow) 
            return null

        const {comments} = this.props;

        let commentsItems = comments.map(item => {
            return <li key={item.id}>
                <Comment comment={item}/>
            </li>

        });
        return <ul>{commentsItems}</ul>

    }
}
