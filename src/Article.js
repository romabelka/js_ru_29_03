import React, { Component, PropTypes } from 'react'
import Comments from './Comments'

class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { title, text} = this.props.article
	    const article = this.props.article
        const body = this.state.isOpen ?
            <section>{text} <br/> <Comments article = {article}/> </section> : null
        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article