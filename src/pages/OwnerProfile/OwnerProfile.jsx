import React, { Component } from 'react';
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import { Link } from 'react-router-dom';
import InfoCard from '../../components/InfoCard/InfoCard';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
} from 'reactstrap';

class OwnerProfile extends Component {
	state = {};

	render() {
		return (
			<div
				style={{
					width: '100%',
					maxWidth: '300px',
					textAlign: 'center',
				}}
			>
				<h1 style={{ margin: '0 0 1em 0', textAlign: 'center' }}>
					Profile
				</h1>

				<InfoCard
					user={this.props.location.state.user}
					handleDeleteUser={this.props.handleDeleteUser}
				/>

				<h2 style={{ margin: '1em 0 1em 0', textAlign: 'center' }}>
					Pets
				</h2>
				{this.props.pets.map((pet) => (
					<SummaryCard pet={pet} />
				))}

				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<CardTitle>
						<h1>Following</h1>
					</CardTitle>
					<Link
						to={{
							pathname: '/search',
						}}
					>
						<CardText>
							<i class="fas fa-search"></i>
						</CardText>
					</Link>
				</div>
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
