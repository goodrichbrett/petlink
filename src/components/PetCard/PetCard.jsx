import React from 'react';
import { Link } from 'react-router-dom';
import './PetCard.css';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const PetCard = ({ pet }) => {
	return (
		<>
			<div id="petcard">
				<Card>
					<CardImg top width="100%" src={pet.avatar} alt="Card image cap" />
					<CardBody>
						<div style={{display:'flex', justifyContent: 'space-between'}}>
						<CardTitle>{pet.name}</CardTitle>
						<Link 
						to={{
							pathname: '/edit-pet',
							state: { pet },
						}}
						>
							<CardText><i class="far fa-edit"></i></CardText>
						</Link>
						</div>
						<ul>
							<li>{pet.type}</li>
							<li>{pet.breed}</li>
							<li>{pet.gender}</li>
							<li>{pet.age}</li>
							<li>Illnesses: {pet.illnesses.join(', ')}</li>
							{/* followers? */}
						</ul>
					</CardBody>
					<div id='cardButtons'>
						<Button>Add Behavior</Button>
						<Button>Add Symptom</Button>
					</div>
				</Card>
		</div>
	</>
	);
};

export default PetCard;
