import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteArticle } from '../AC/articles'
import ArticleList from '../componentsNew/ArticleList'

class ArticleListContainer extends Component {
    static propTypes = {

    };

    render() {
        return <ArticleList {...this.props}/>
    }
}

export default connect(state => {
    const { articles } = state
    return { articles }
}, {
    deleteArticle
})(ArticleListContainer)