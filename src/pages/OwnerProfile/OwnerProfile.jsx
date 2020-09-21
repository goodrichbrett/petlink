import React, { Component } from 'react';
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import { Link } from 'react-router-dom';
// import * as petAPI from '../../services/petService';
// import Pet from '../Pet/Pet';
import InfoCard from '../../components/InfoCard/InfoCard';

class OwnerProfile extends Component {
	state = {};

	// pass to /pet through link

	render() {
		return (
			<div>
				<h1>Owner Page</h1>
				<img src="https://picsum.photos/50/50" alt="" />

				<InfoCard user={this.props.location.state.user} />
				{/* Add button to edit ProfileInfo will take use to edit  */}

				<h2>Pets</h2>
				{this.props.pets.map((pet) => (
					<SummaryCard pet={pet} />
				))}

				<h2>Following</h2>
				{this.props.followedPets.map((followedPet) => (
					<Link
						to={{
							pathname: '/pet',
							pet: { followedPet },
						}}
					>
						<SummaryCard pet={followedPet} />
					</Link>
				))}
			</div>
		);
	}
}

export default OwnerProfile;
