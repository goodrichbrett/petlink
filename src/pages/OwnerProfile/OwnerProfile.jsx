import React, { Component } from 'react';
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import { Link } from 'react-router-dom';
import * as petAPI from '../../services/petService';
import Pet from '../Pet/Pet';

class OwnerProfile extends Component {
	state = {};

	// pass to /pet through link

	render() {
		return (
			<div>
				<h1>Owner Page</h1>
				<img src="https://picsum.photos/50/50" alt="" />
				<p>Information on the user, add a textbox component here.</p>

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
