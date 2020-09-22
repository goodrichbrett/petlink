import React, { Component } from 'react';
import PostSummaryCard from '../../components/PostSummaryCard/PostSummaryCard';
import * as petAPI from '../../services/petService';
import * as postAPI from '../../services/postService';

class OwnerFeed extends Component {
	state = {
		followedPets: [],
		posts: [],
		pet: {},
	};
	async componentDidMount() {
		const followedPets = await petAPI.getPets(this.props.user.following);
		const posts = await postAPI.getPosts();
		this.setState({ followedPets, posts });
	}
	render() {
		return (
			<>
				<h1 style={{ margin: '0 0 1em 0', textAlign: 'center' }}>
					News Feed
				</h1>
				{this.state.posts.map((post) => (
					// Update SummaryCard component once we have more information on a pets Post.
					<PostSummaryCard key={post._id} post={post} />
				))}
			</>
		);
	}
}
export default OwnerFeed;
