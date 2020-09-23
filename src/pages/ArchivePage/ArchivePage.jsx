import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as postAPI from '../../services/postService';

class ArchivePage extends Component {
	state = {
		archivedPosts: [],
	};

	async componentDidMount() {
		const archivedPosts = await postAPI.getArchived();
		this.setState({ archivedPosts });
	}

	render() {
		return (
			<>
				<h1>Archive Page</h1>
				<ul>
					{this.state.archivedPosts.map((post) => (
						<li>{post.title}</li>
					))}
				</ul>
			</>
		);
	}
}

export default ArchivePage;
