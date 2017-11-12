import React, {Component} from "react";
import CommentsList from './CommentsList'

export default class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return (
            <div>
                <h1>
                    {article.title}
                </h1>
                <button onClick={this.toggleOpen}>
                    {isOpen
                        ? 'close'
                        : 'open'}</button>
                <section>
                    {this.getBody()}
                </section>
            </div>
        )
    }

    getBody = () => {
        let {article} = this.props;

        if (!this.state.isOpen) 
            return null

        return (
            <section>
                {article.text}
                {article.comments ? <CommentsList comments = {article.comments}/> : ''}
            </section>
        )
    }

    toggleOpen = (ev) => {

        this.setState({
            isOpen: !this.state.isOpen
        })

    }
}