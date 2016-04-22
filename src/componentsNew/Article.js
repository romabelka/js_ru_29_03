import React, { Component, PropTypes } from 'react'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        deleteArticle: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <h3>{this.props.article.title}</h3>
                <a href = "#" onClick = {this.handleDelete}>delete article</a>
            </div>
        )
    }

    handleDelete = (ev) => {
        ev.preventDefault()
        const { deleteArticle, article: { id }} = this.props
        deleteArticle(id)
    }
}

export default Article