import React from 'react';
import PetCard from '../../components/PetCard/PetCard';
import * as petAPI from '../../services/petService';

// class Pet extends React.Component {
// 	state = {
// 		pet: '',
// 	};

// 	async componentDidMount() {
// 		const pet = await petAPI.getOne();
// 		this.setState((state) => ({ pet: pet }));

// 		//APIcall to get user with populated pet information
// 		// this.setState(state => ({
// 		//     pets: [...state.pets, user.pets]
// 		//   })
// 	}

// 	render() {
// 		return (
// 			<>
// 				{/* {this.state.pets.map((pet) => (
// 					<PetCard pet={pet} />
// 				))} */}
// 				{/* <p>{this.state.pet.name}</p> */}
// 				<h1>pet page</h1>
// 			</>
// 		);
// 	}
// }

const Pet = (props) => {
	return (
		<div>
			<h1>Pet Page</h1>
			<p>{props.pet}</p>
		</div>
	);
};

export default Pet;
