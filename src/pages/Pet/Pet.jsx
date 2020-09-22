import React, { Component } from 'react';
import PetCard from '../../components/PetCard/PetCard';
import PostSummaryCard from '../../components/PostSummaryCard/PostSummaryCard';
import * as postAPI from '../../services/postService';

// const Pet = ({ location, user }) => {
// 	return (
// 		<div>
// 			<h1 style={{ margin: '0 0 1em 0', textAlign: 'center' }}>
// 				{location.state.pet.alias}
// 			</h1>
// 			<PetCard pet={location.state.pet} user={user} />
// 			<div style={{ textAlign: 'center' }}>
// 				<h1
// 					style={{
// 						marginTop: '1em',
// 						marginBottom: '1em',
// 						textAlign: 'center',
// 					}}
// 				>
// 					Activity
// 				</h1>
// 				<p>
// 					{location.state.pet.posts.length
// 						? //summarycard should display post not pet
// 						  location.state.pet.posts.map((post, idx) => (
// 								<PostSummaryCard
// 									key={idx}
// 									pet={location.state.pet}
// 								/>
// 						  ))
// 						: 'No Posts Available.'}
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// export default Pet;

class Pet extends Component {
	state = {
		posts: [],
	};

	async componentDidMount() {
		const posts = await postAPI.getApplicablePosts(
			this.props.location.state.pet._id
		);
		console.log(posts);
		this.setState({ posts });
	}

	render() {
		return (
			<div>
				<h1 style={{ margin: '0 0 1em 0', textAlign: 'center' }}>
					{this.props.location.state.pet.alias}
				</h1>
				<PetCard
					pet={this.props.location.state.pet}
					user={this.props.user}
				/>
				<div style={{ textAlign: 'center' }}>
					<h1
						style={{
							marginTop: '1em',
							marginBottom: '1em',
							textAlign: 'center',
						}}
					>
						Activity
					</h1>
					<p>
						{this.state.posts.length
							? //summarycard should display post not pet
							  this.state.posts.map((post, idx) => (
									<PostSummaryCard key={idx} post={post} />
							  ))
							: 'No Posts Available.'}
					</p>
				</div>
			</div>
		);
	}
}

export default Pet;
