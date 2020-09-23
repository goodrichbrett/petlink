import React, { Component } from 'react';
import PetCard from '../../components/PetCard/PetCard';
import PostSummaryCard from '../../components/PostSummaryCard/PostSummaryCard';
import * as postAPI from '../../services/postService';

class Post extends Component {
	state = {
		posts: [],
	};

	async componentDidMount() {}

	render() {
		return (
			<div>
				<h1>Post Page</h1>
			</div>
		);
	}
}

export default Post;
