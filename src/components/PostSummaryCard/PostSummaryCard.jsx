import React from 'react';
import { Link } from 'react-router-dom';
import * as petAPI from '../../services/petService'
import '../SummaryCard/SummaryCard.css'

class PostSummaryCard extends React.Component {
	state = { 
		pet: {}
	}

	async componentDidMount() {
		const pet = await petAPI.getOneById(this.props.post.pet);
		this.setState({pet});
	}

	render() { 
		return (
		<>
			<Link style={{margin: '10px', color:'black'}}
			id="summaryCard"
			to={{
				//this should redirect to /post from the news feed and to /pet from the owner profile
				pathname: '/post',
				state: { post: this.props.post },
				}}
			>
				<span id="summaryCard-img" style={{ backgroundImage: `url(${this.state.pet.avatar})` }} >
				</span>
				<span id="summaryCard-content">
					<h3>{this.state.pet.name}</h3>
					<h3>{this.props.post.title}</h3>
				</span>
			</Link>
		</> 
		);
	}
}
 
export default PostSummaryCard;