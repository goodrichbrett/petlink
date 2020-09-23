import React, { Component } from 'react';
import { getAllUsers } from '../../services/userService';
import { Link } from 'react-router-dom';
import * as petAPI from '../../services/petService';
import SummaryCard from '../../components/SummaryCard/SummaryCard';

class Pets extends Component {
	state = {
		users: [],
		pets: [],
	};

	async componentDidMount() {
		const users = await getAllUsers();
		const pets = await petAPI.getAllPets();
		this.setState({ users, pets });
	}

	render() {
		return (
			<div id="petList">
				<h1>Hello. This is a list of all the pets.</h1>
				{this.state.pets.map((pet) => (
					<Link to={{ pathname: `/pets/${pet._id}`, pet: { pet } }}>
						<SummaryCard pet={pet} />
					</Link>
				))}
			</div>
		);
	}
}

export default Pets;
