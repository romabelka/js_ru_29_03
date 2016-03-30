import React, { Component, PropTypes } from 'react'

class Comments extends Component {

	state = {
		isOpen: false
	}

	render() {
		const comments = this.props.article.comments? this.props.article.comments : null;
		const showMsg = 'Показать комментарии';

		if (comments){

			const body = this.state.isOpen ? <ul>{this.getCommentList()}</ul> : null;

			return (
				<div>
					<h4 onClick = {this.handleClick}>{showMsg}</h4>
					{body}
				</div>
			)
		} else {
			return null;
		}
	}

	getCommentList() {
		return this.props.article.comments.map((comment, index) =>
			<li key={comment.id}>{comment.text}</li>
		)
	}

	handleClick = (ev) => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}

export default Comments
