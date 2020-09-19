import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const PetCard = ({ pet }) => {
	return (
		<>
			<div id="petcard">
				<img src={pet.avatar} alt="" />
				<h3>{pet.name}</h3>
				<Link
					to={{
						pathname: '/edit-pet',
						state: { pet },
					}}
				>
					Edit
				</Link>
				<ul>
					<li>{pet.type}</li>
					<li>{pet.breed}</li>
					<li>{pet.gender}</li>
					<li>{pet.age}</li>
					<li>Illnesses: {pet.illnesses.join(', ')}</li>
					{/* followers? */}
				</ul>
				<Button>Add Behavior</Button>
				<Button>Add Symptom</Button>
			</div>
			<div>
				<h3>Activity</h3>
			</div>
		</>
	);
};

export default PetCard;
