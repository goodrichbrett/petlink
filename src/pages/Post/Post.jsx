import React, { Component } from 'react';
import PostCard from '../../components/PostCard/PostCard';

class Post extends Component {
	state = {
		post: this.props.history.location.state.post,
	};

	// async componentDidMount() {}

	render() {
		return (
			<div>
				<h1>{this.state.post.title}</h1>
				<PostCard post={this.state.post} />
			</div>
		);
	}
}

export default Post;
