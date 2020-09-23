import React, { Component } from 'react';
import PetCard from '../../components/PetCard/PetCard';
import PostSummaryCard from '../../components/PostSummaryCard/PostSummaryCard';
import * as postAPI from '../../services/postService';

class Post extends Component {
	state = {
		post: this.props.history.location.state.post,
	};

	// async componentDidMount() {}

	render() {
		return (
			<div>
				<h1>{this.state.post.title}</h1>
				<p>{new Date(this.state.post.date).toLocaleDateString()}</p>
				<p>{this.state.post.content}</p>
				<h3>Tags</h3>
				<ul>
					{this.state.post.tags.map((tag) => (
						<li>{tag}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Post;
