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
			<div style={{width:'100%', maxWidth:'300px', textAlign:'center'}}>
				<h1 style={{ margin: '0 0 1em 0', textAlign: 'center' }}>
					Profile
				</h1>

				<InfoCard user={this.props.location.state.user} />

				<h2 style={{ margin: '1em 0 1em 0', textAlign: 'center' }}>Pets</h2>
				{this.props.pets.map((pet) => (
					<SummaryCard pet={pet} />
				))}

				<h2 style={{ margin: '1em 0 1em 0', textAlign: 'center' }}>Following</h2>
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
